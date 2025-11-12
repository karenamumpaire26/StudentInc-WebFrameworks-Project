const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/users');
const ctrlData = require('../controllers/data');

// registration and login 
  router.post('/register',ctrlUsers.register);
  router.post('/login',ctrlUsers.login);
  
//data for students
router.get('/students',ctrlData.getStudents);



module.exports = router;
