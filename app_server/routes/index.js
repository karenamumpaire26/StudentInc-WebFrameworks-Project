const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlUsers = require('../controllers/users');
const ctrlOthers = require('../controllers/others');

/* User pages*/
router.get('/register', ctrlUsers.registerForm);
router.get('/login', ctrlUsers.loginForm);

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
