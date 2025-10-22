const express = require('express');
const router = express.Router();

const studentController = require('../controllers/users');  

router.get('/register', studentController.registerForm);
router.post('/register', studentController.registerStudent);

router.get('/login', studentController.loginForm);

module.exports = router;
