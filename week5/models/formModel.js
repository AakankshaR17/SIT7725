// models/formModel.js
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://s224184261:akkuakku@newakku.ygiri.mongodb.net/';
const dbName = 'new';
const collectionName = 'newakku';

const insertFormData = async (formData) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    try {
        await collection.insertOne(formData);
        console.log("Form data inserted successfully");
    } catch (err) {
        console.error("Error inserting form data", err);
        throw err;
    } finally {
        client.close();
    }
};

module.exports = { insertFormData };
