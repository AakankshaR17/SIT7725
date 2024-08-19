// controllers/formController.js
const { insertFormData } = require('../models/formModel');

const submitForm = async (req, res) => {
    try {
        const formData = req.body;
        await insertFormData(formData);
        res.send('Form submitted successfully!');
    } catch (err) {
        res.status(500).send('Error submitting form');
    }
};

const renderHomePage = (req, res) => {
    res.render('index');
};

module.exports = { submitForm, renderHomePage };
