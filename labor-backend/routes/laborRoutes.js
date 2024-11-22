const express = require('express');
const router = express.Router();
const Labor = require('../models/Labor');

// Add a new labor
router.post('/labors', async (req, res) => {
    try {
        const newLabor = new Labor(req.body);
        const savedLabor = await newLabor.save();
        res.status(201).json(savedLabor);
    } catch (error) {
        res.status(500).json({ message: 'Error adding labor', error: error.message });
    }
});

// Fetch all labors
router.get('/labors', async (req, res) => {
    try {
        const labors = await Labor.find();
        res.status(200).json(labors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching labors', error: error.message });
    }
});

module.exports = router;
