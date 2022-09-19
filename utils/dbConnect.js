const mongoose = require('mongoose');
function dbConnect(){
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fcuh9cy.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports = dbConnect;