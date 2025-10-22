const Student = require('../models/student');

const registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
};

const loginForm = (req, res) => {
  res.render('login', { title: 'Login' });
};


module.exports = {
  registerForm,
  loginForm,
   
};
