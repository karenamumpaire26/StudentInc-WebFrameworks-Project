const mongoose = require('mongoose');
const Student = mongoose.model('Student');

// Register new user
const register = function (req, res) {
  Student.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(student => {
      res.status(201).json(student);
    })
    .catch(err => {
      res.status(400).json({ message: "Error creating student", error: err });
    });
};

// Login existing user
const login = function (req, res) {
  Student.findOne({ email: req.body.email })
    .then(student => {
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      if (student.password !== req.body.password) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      res.status(200).json({ message: "Success", user: student });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error logging in', error: err });
    });
};

module.exports = {
  register,
  login
};
