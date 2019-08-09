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

// Post a project

router.post('/create', (req, res, next) => {
		let post = new Projects(req.body);
			post.save()
				.then(post => {
					res.status(200).json({'Project': 'Project added.'});
				})
				.catch(err => {
					res.status(400).send('Unable to save to database');
				});
})

module.exports = router;