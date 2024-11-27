import { Router } from 'express';
import { Booking } from '../models/Booking';

const router = Router();

// Create a new booking
router.post('/', async (req, res) => {
  const { venueName, date } = req.body;
  try {
    const booking = await Booking.create({ venue_name: venueName, date });
    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get all bookings
router.get('/', async (_, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

export default router;
