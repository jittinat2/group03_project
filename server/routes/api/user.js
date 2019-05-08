const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// allusers
router.get('/allusers', async (req, res) => {
    let users = await loadUserCollection();
    res.send(await users.find({}).toArray())

});

<<<<<<< HEAD
=======
// Search User
router.post('/AUser', async (req, res) => {
    let users = await loadUserCollection();
    res.send (await users.findOne({username: ( req.body.username )}))

});

>>>>>>> noonPath
// login
router.post('/login', async (req, res) => {

    let users = await loadUserCollection();
    let sessions = await loadSessionCollection();
    let login = await users.findOne(
        { username: ( req.body.username ),password: (req.body.password) }
    );
    if (login === null){ res.send( {result: "Fail"} )}
    else { 
        await sessions.deleteOne({ username: ( req.body.username )})
        await sessions.insertOne({ sessionID: req.sessionID , username: ( req.body.username )})
        res.send( {result: "Success"} )
    }   
    console.log(login);
});

router.post('/checkLogin', async (req, res) => {
    let checkSession = await checkLogin(req)
    if (checkSession === null){ 
        res.send( {result: "Fail"} )
    }
    else { 
        res.send( {result: "Success",checkSession} )
        }  
});

// logout
router.post('/logout', async (req, res) => {
    if (await checkLogin(req) === null){
        res.send( {result: "error"} )
        return
    }
    let sessions = await loadSessionCollection();
    await sessions.deleteOne({ sessionID: ( req.sessionID )})
    res.send( {result: "Success"} )
});


// forget
router.post('/forget', async (req, res) => {
    // if (await checkLogin(req) === null){
    //     res.send( {result: "error"} )
    //     return
    // }
    let users = await loadUserCollection();
    let forget = await users.findOne(
        { email: ( req.body.email ) ,username: ( req.body.username ) }
    );
    if (forget === null){ res.send( {result: "Fail"} )}
    else { res.send( {result: "Success"} )}   
    console.log(forget);
    
});

// repassword
router.post('/rePassword', async (req, res) => {
    let users = await loadUserCollection();
    res.send (await users.findOneAndUpdate(
        {username :( req.body.username )}  ,
        {$set: {password :( req.body.password )} }  
     ))

});

// Signup
router.post('/signup', async (req, res) => {
    let users = await loadUserCollection();
    let signup = await users.findOne(
<<<<<<< HEAD
        { username: ( req.body.username ) }
    );
=======
        { username:  req.body.username  }
    );
    console.log(signup);
    
>>>>>>> noonPath
    if (signup === null){
        await users.insertOne({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            profilename: req.body.profilename,
            createdAt: new Date()
        });
        res.send( {result: "Success"} )
    }
    else {res.send( {result: "Fail"} )}
})

// Delete users
router.post('/delete/', async (req, res) => {
    let users = await loadUserCollection();
    await users.deleteOne({_id: new mongodb.ObjectID(req.body._id)});
    res.status(200).send();
})

async function loadUserCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Users');
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