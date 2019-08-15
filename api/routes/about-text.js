const AboutText = require('../models/about-text-model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonWebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get about

router.get('/', (req, res, next) => {
	AboutText.find((err, data) => {
		res.json(data);
	})
});

// Create about

router.route('/create').post(ensureAutenticated, (req, res, next) => {
	jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
			let post = new AboutText(req.body);
				post.save()
					.then(post => {
						res.status(200).json({'About': 'About added.'});
					})
					.catch(err => {
						res.status(400).send('Unable to save to database');
					});
		}
	});
});

// Get about

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            AboutText.findById(req.params.id, (err, about) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(about);
                }
            });
        }
    });
});

// Update about

router.route('/update/:id').post(ensureAutenticated, (req, res, next) => {
        jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            AboutText.findById(req.params.id, (err, data) => {
                if (!data)
                    return next(new Error('Could not load document'));
                else {
                    data.text = req.body.text;
                    data.save().then(data => {
                        res.json('Update done');
                    }).catch(err => {
                        res.status(400).send('Update failed');
                    });
                }
            });
        }
    });
});

module.exports = router;