const Experiments = require('../models/experiments-model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get Experiments

router.get('/', (req, res, next) => {
	Experiments.find((err, data) => {
		res.json(data);
	})
})

// Post an experiment

router.route('/create').post(ensureAutenticated, (req, res, next) => {
	jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
			let post = new Experiments(req.body);
				post.save()
					.then(post => {
						res.status(200).json({'Experiment': 'Experiment added.'});
					})
					.catch(err => {
						res.status(400).send('Unable to save to database');
					});
		}
	});
})

// Get experiment by id

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Experiments.findById(req.params.id, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                res.json(data);
                }
            });
        }
    });
});

// Update by id

router.route('/update/:id').post(ensureAutenticated, (req, res, next) => {
        jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Experiments.findById(req.params.id, (err, data) => {
                if (!data)
                    return next(new Error('Could not load document'));
                else {
                    data.title = req.body.title;
                    data.description = req.body.description;
                    data.url = req.body.url;
                    data.icon = req.body.icon;
                    data.liveUrl = req.body.liveUrl;
                    data.icon2 = req.body.icon2

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

router.get('/delete/:id', ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
            res.sendStatus(403);
        } else {
            Experiments.findByIdAndRemove(req.params.id, (err, data) => {
                if(!err) {
                    res.json('Sucessfully deleted');
                } else {
                    console.log('error');
                }
            })
        }
    });
})

module.exports = router;