const Student = require('../models/student');

const registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
};

const loginForm = (req, res) => {
  res.render('login', { title: 'Login' });
};

// Save student data from the registration form
const registerStudent = (req, res) => {
  const studentData = {
    tNumber: req.body.tNumber,
    fullName: req.body.fullName,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  };

  Student.create(studentData)
    .then(() => res.redirect('/success'))
    .catch((err) => {
      console.error(err);
      res.status(400).send('Error saving student');
    });
};

module.exports = {
  registerForm,
  loginForm,
  registerStudent,  
};
