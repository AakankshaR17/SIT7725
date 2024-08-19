// StartServerWithMongo.js
const express = require('express');
const path = require('path');
const { renderHomePage, submitForm } = require('./controllers/formController');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.get('/', renderHomePage);
app.post('/submit-form', submitForm);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
