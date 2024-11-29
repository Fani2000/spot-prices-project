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
    port: 5432,
    dialect: 'postgres',
});

// Define the Workshop model
const Workshop = sequelize.define('Workshop', {
    venue_name: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    available: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
});

// Sync with the database and initialize workshops
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL');
        await sequelize.sync({ force: true }); // Use { force: true } for development to recreate tables

        // Initialize workshops with sample data
        await Workshop.bulkCreate([
            { venue_name: 'Workshop A', date: new Date('2024-12-01'), available: true },
            { venue_name: 'Workshop B', date: new Date('2024-12-02'), available: false },
            { venue_name: 'Workshop c', date: new Date('2024-12-01'), available: true },
            { venue_name: 'Workshop d', date: new Date('2024-12-02'), available: false },
            { venue_name: 'Workshop e', date: new Date('2024-12-02'), available: false },
        ]);

        console.log('Sample data added');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// Fetch workshops
app.get('/api/book', async (req, res) => {
    try {
        const workshops = await Workshop.findAll();
        res.json(workshops);
    } catch (error) {
        res.status(500).send('Error fetching workshops');
    }
});

// Book a workshop
app.post('/api/book/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const workshop = await Workshop.findByPk(id);
        if (!workshop || !workshop.available) {
            return res.status(400).send('Workshop not available');
        }

        workshop.available = false;
        await workshop.save();
        res.status(200).send('Booking successful');
    } catch (err) {
        res.status(500).send('Failed to book workshop');
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));