const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://karen:Kakuba%402002@cluster0.czyz7de.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => {
    console.log('Mongoose connected to ' + dbURI);
  })
  .catch(err => {
    console.error('Mongoose connection error:', err);
  });

module.exports = mongoose;
