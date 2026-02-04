import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// Get all leads
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new lead
router.post('/', async (req, res) => {
    const lead = new Lead(req.body);
    try {
        const newLead = await lead.save();
        res.status(201).json(newLead);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
