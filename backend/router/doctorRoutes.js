import express from 'express';
import Doctor from '../models/Doctor.js'; // Adjust the import path as needed
import jwt from 'jsonwebtoken';

const router = express.Router();

// Doctor registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const doctor = new Doctor({ name, email, password });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Doctor login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email });
    if (!doctor || !(await doctor.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
