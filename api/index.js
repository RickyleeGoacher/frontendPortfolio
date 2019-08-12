const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const ProjectRoutes = require('./routes/projects');
const ExperimentRoutes = require('./routes/experiments');
const UserRoute = require('./routes/users');
const passport = require('passport');

app.use(bodyParser.json());

app.use(cors({
  origin:['http://localhost:4200'],
  credentials:true,
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/api/projects', ProjectRoutes);
app.use('/api/experiments', ExperimentRoutes);
app.use('/api/users', UserRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));