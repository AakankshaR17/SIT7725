


const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://s224184261:<db_password>@newakku.ygiri.mongodb.net/";
let mongoClient = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
const dbName = 'new';
const collectionName = 'newakku';

let projectsCollection;

mongoClient.connect((err,db) => {
    // projectsCollection = mongoClient.db("deakinCrowds").collection("projects");
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = mongoClient;
