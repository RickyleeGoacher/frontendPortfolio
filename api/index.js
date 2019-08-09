const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const ProjectRoutes = require('./routes/projects');

app.use(bodyParser.json());

app.use('/api/projects', ProjectRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));