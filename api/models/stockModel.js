//build mongo schema
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  trade_id: {
    type: String,
    required: 'Kindly enter the trade_id of the task'
  }, 
  user:{
	user_id: {
      type: String,
      required: 'Kindly enter the user_id of the task'
    }, 
    user_name: {
      type: String,
      required: 'Kindly enter the user_name of the task'
    }  
  },
  trade_type: {
    type: String,
    required: 'Kindly enter the trade_type of the task'
  }, 
  stock_symbol: {
    type: String,
    required: 'Kindly enter the stock_symbol of the task'
  }, 
  number_of_shares: {
    type: Number,
    required: 'Kindly enter the number_of_shares of the task'
  },
  price_of_stock: {
    type: Number,
    required: 'Kindly enter the price_of_stock of the task'
  },
  timestamp: {
    type: Date,
    required: 'Kindly enter the timestamp of the task'
  }
});

module.exports = mongoose.model('Trades', TradeSchema);