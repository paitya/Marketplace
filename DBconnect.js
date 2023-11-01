const mongoose = require("mongoose");

const dbURI = 'mongodb+srv://shrabonipaitya2:T4dKFQFjf07pP1Vu@cluster0.gx4nbkf.mongodb.net/?retryWrites=true&w=majority';

async function connectToDatabase() {
    return mongoose.connect(dbURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    });
  }

module.exports = connectToDatabase;

