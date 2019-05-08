const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//create bracket
router.post('/create/:username', async (req, res) => {
    const posts = await loadPostCollection();

    // var max = 0
    // var maxlenbrac = await posts.findOne({ username: ( req.params.username ) })

    // for(i in maxlenbrac.bracket){
    //     console.log((maxlenbrac.bracket[i].bracketId));
    //     if(maxlenbrac.bracket[i].bracketId >= max){
    //         max = maxlenbrac.bracket[i].bracketId
    //     }
    // }
    // console.log("this " + max); 
    
    res.send( await posts.insertOne(
        { 
            username: req.params.username,
            tourName: req.body.tourName,
            tourType: req.body.tourType,
            size: req.body.size,
            createdAt: new Date() 
        }
    ))
})

//delete bracket
router.delete('/delete/:id', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    console.log("Deleted : " + req.params.id);
    res.status(200).send();
})

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://phaksuree:Nan_79678956@mycluster-bpdtm.mongodb.net', {
        useNewUrlParser: true
    }) 

    return client.db('vue').collection('Users');
}

module.exports = router;