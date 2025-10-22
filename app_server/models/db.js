const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://karen:<db_password>@cluster0.czyz7de.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => console.log('Mongoose connected to ' + dbURI))
  .catch(err => console.log('Mongoose connection error: ' + err));

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Optional: graceful shutdown
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
