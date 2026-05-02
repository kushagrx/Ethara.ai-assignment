const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes=require('./routes/authRoutes');
const projectRoutes=require('./routes/projectRoutes');
const taskRoutes=require('./routes/taskRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});
app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});