const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//generate bracket
router.post('/generate', async (req, res) => {
    const brackets = await loadBracketCollection();
    // if (await checkLogin(req) === null){
    //     res.send( {result: "error"} )
    //     return
    // }

    if (req.body.username === null || req.body.tourName === null || req.body.tourSize === null){ res.send( {result: "error"} ) 
    return}
    let br = await brackets.findOne(
        { username:  req.body.username ,tourName: req.body.tourName }
    );
    if ( br === null){
        await brackets.insertOne({
            username: req.body.username,
            tourName: req.body.tourName,
            tourSize: req.body.tourSize,
            createdAt: new Date() 
        });
        let eiei = await  brackets.findOne({ username: req.body.username,
            tourName: req.body.tourName,
            tourSize: req.body.tourSize})
        res.send( {result: "Success" ,_id : eiei._id} )   
    } 
    else {res.send( {result: "Fail"} )}
})

// create save
router.post('/create', async (req, res) => {
    const brackets = await loadBracketCollection();
    /* check to login*/
    // if (await checkLogin(req) === null){
    //     res.send( {result: "error"} )
    //     return
    // }
    /* ใช้ _id หาว่าอันไหนของใครแล้ว ค่อย update */ 
    await brackets.findOneAndUpdate( {_id: new mongodb.ObjectID(req.body._id )},{$set: {Detail:req.body.Detail}} );
    res.send( {result: "Success"} )
})

//show own bracket 
router.post('/show', async (req, res) => {
    const brackets = await loadBracketCollection();
    if (await checkLogin(req) === null){
        res.send( {result: "error"} )
        return
    }
    res.send(await brackets.findOne({_id: new mongodb.ObjectID(req.body._id )}));
})


//delete bracket
router.post('/delete', async (req, res) => {
    const brackets = await loadBracketCollection();
    await brackets.deleteOne({_id: new mongodb.ObjectID(req.body._id )})
    console.log("Deleted ");
    res.status(200).send();
})

async function loadBracketCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Bracket');
}

async function loadSessionCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Sessions');
}

async function checkLogin(req) {
    let sessions = await loadSessionCollection();
    let auth = await sessions.findOne({ sessionID: req.sessionID})
    console.log(auth);
    return auth
}


module.exports = router;