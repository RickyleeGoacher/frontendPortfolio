const Projects = require('../models/project-model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Get projects

router.get('/', (req, res, next) => {
	Projects.find((err, data) => {
		res.json(data);
	})
})