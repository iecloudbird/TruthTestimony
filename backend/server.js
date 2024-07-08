const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//Variables declaration (etc. app, port, routes)
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/users');

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});