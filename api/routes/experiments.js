const Experiments = require('../models/experiments-model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Get Experiments

router.get('/', (req, res, next) => {
	Experiments.find((err, data) => {
		res.json(data);
	})
})

// Post an experiment

router.post('/create', (req, res, next) => {
		let post = new Experiments(req.body);
			post.save()
				.then(post => {
					res.status(200).json({'Experiment': 'Experiment added.'});
				})
				.catch(err => {
					res.status(400).send('Unable to save to database');
				});
})

module.exports = router;