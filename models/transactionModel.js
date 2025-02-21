const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now 
  },
  description: String,
  path: {
    type: String,
    required: false
  },
  paymentMethod: { 
    type: String,
    required: true
  },
  transactionType: { 
    type: String,
    required: true
  }
});

const transactionModel = mongoose.model('transactions', transactionSchema);

module.exports = transactionModel;
