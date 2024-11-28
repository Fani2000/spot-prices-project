const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection with Sequelize
const sequelize = new Sequelize('workshops_db', 'postgres', 'postgres_password', {
    host: 'postgres',
    dialect: 'postgres',
});

// Define the Bookings model
const Booking = sequelize.define('Booking', {
    venue_name: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
});

// Sync with the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');
        await sequelize.sync();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Book a workshop
app.post('/api/book', async (req, res) => {
    const { venueName, date } = req.body;
    try {
        await Booking.create({ venue_name: venueName, date });
        res.status(200).send('Booking successful');
    } catch (err) {
        res.status(500).send('Failed to book workshop');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));