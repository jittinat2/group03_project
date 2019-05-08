const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//create bracket
router.post('/create', async (req, res) => {
    const brackets = await loadBracketCollection();
    if (await checkLogin(req) === null){
        res.send( {result: "error"} )
        return
    }
    await brackets.insertOne({
        username: req.body.username,
        tourName: req.body.tourName,
        tourType: req.body.tourType,
        size: req.body.size,
        createdAt: new Date() 
    });
    res.send( {result: "Success"} )

})

router.post('/table', async (req, res) => {
    const brackets = await loadBracketCollection();
    if (await checkLogin(req) === null){
        res.send( {result: "error"} )
        return
    }
    await brackets.insertOne({
        
    });
    res.send( {result: "Success"} )

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