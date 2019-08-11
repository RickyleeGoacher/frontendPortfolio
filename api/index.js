const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const ProjectRoutes = require('./routes/projects');
const ExperimentRoutes = require('./routes/experiments');

app.use(bodyParser.json());

app.use(cors({
  origin:['http://localhost:4200'],
  credentials:true,
}));

app.use('/api/projects', ProjectRoutes);
app.use('/api/experiments', ExperimentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));