const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users'); 

// Display register and login forms
router.get('/register', ctrlUsers.registerForm);
router.get('/login', ctrlUsers.loginForm);

module.exports = router;
