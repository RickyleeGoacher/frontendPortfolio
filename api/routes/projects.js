const Projects = require('../models/project-model');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonWebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get projects

router.get('/', (req, res, next) => {
	Projects.find((err, data) => {
		res.json(data);
	})
})

// Post a project

router.route('/create').post(ensureAutenticated, (req, res, next) => {
	jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
			let post = new Projects(req.body);
				post.save()
					.then(post => {
						res.status(200).json({'Project': 'Project added.'});
					})
					.catch(err => {
						res.status(400).send('Unable to save to database');
					});
		}
	});
});

// Get project by id

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Projects.findById(req.params.id, (err, project) => {
                if (err) {
                    console.log(err);
                }
                else {
                res.json(project);
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
            Projects.findById(req.params.id, (err, project) => {
                if (!project)
                    return next(new Error('Could not load document'));
                else {
                    project.title = req.body.title;
                    project.description = req.body.description;
                    project.url = req.body.url;
                    project.icon = req.body.icon;
                    project.liveUrl = req.body.liveUrl;
                    project.icon2 = req.body.icon2

                    project.save().then(project => {
                        res.json('Update done');
                    }).catch(err => {
                        res.status(400).send('Update failed');
                    });
                }
            });
        }
    });
});

// Delete project by id

router.get('/delete/:id', ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
            res.sendStatus(403);
        } else {
            Projects.findByIdAndRemove(req.params.id, (err, data) => {
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