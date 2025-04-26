const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  wallet: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  password2:{
    type: String,
    required: true
  },
  code:{
    type: String,
    required: false
    
  },
  availbalance:{
    type: String,
    default: '00.00'
  },
  activedeposit:{
    type: String,
    default: '00.00'
  },
  activeinvestment:{
    type: String,
    default: '00.00'
  },
  withdrawals:{
    type: String,
    default: '00.00'
  },
  plantype:{
    type: String,
    default: 'None'
  },
  referalcount :{
    type: Number,
    default: 0
  },
  acticvatedaccount:{
    type: Boolean,
    default: false,
  },
  refaralsbonus:{
    type: String,
    default: '00.00'
  },
  referalcode:{
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
