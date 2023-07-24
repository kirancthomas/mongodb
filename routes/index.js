const e = require('express');
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017';








/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.post('/signup',function(req,res){

 console.log(req.body)

  res.send('file send')
  

})



async function connectToDB(err,dataFile) {
  const client = new MongoClient(uri);

  try {
    
    await client.connect();
    const db = client.db('sample').collection('user').insertOne()
    console.log('dataconnected',db.databaseName);


    client.close();
    
  } catch (err) {
    console.log('error', err);
  }
  
  
}


connectToDB();  

module.exports = router;
