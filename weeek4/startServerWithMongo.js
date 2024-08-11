const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const app = express();
const port = 3000;

// MongoDB connection string and details
const url = 'mongodb+srv://s224184261:akkuakku@newakku.ygiri.mongodb.net/';
const dbName = 'new'; // Your database name
const collectionName = 'newakku'; // Your collection name

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submissions
app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body; // Get the form data from the request body
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(dbName);
        const collection = db.collection(collectionName); // Use the specified collection name
        await collection.insertOne(formData);
        console.log("Form submitted and data inserted");
        res.send('Form submitted successfully!');
        client.close();
    } catch (err) {
        console.error("Error handling form submission", err);
        res.status(500).send('Error submitting form');
    }
});

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
