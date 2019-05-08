//controller functions for each call
'use strict';

var mongoose = require('mongoose'),
  Trade = mongoose.model('Trades');

exports.create_a_trade = function(req, res) {
  var new_trade = new Trade(req.body);
  new_trade.save(function(err, trade) {
    if (err)
      res.send(err);
    res.json(trade);
  });
};

exports.read_trades = function(req, res) {
  //check if query param passed in for user_id
	if(req.query.name != null){
		Trade.find({name: req.query.name}, function(err, trade) {
			if (err)
				res.send(err);
			res.json(trade);
		});
    }
  //if not return all records
    else{
		Trade.find({}, function(err, trade) {
			if (err)
				res.send(err);
			res.json(trade);
		});  
	}
};

exports.delete_trades = function(req, res) {
	Trade.remove({}, function(err, trade) {
		if (err)
			res.send(err);
		res.json({ message: 'trades successfully deleted' });
	});
};

exports.trades_for_stock = function(req, res) {
	Trade.find({stock_symbol: req.params.stock_symbol, timestamp: {$gte: req.query.start, $lte: req.query.end } }, function(err, trade) {
		if(err)
		  res.send(err);
		res.json(trade); 
  });
}

exports.price_for_stock = function(req, res) {
  //console.log(req.params.stock_symbol);
	Trade.find({stock_symbol: req.params.stock_symbol}, function(err, trade) {
		if(err)
		  res.send(err);
		var low = getMinY(trade)
		var high = getMaxY(trade)
		//var obj = new Object("symbol: " + req.params.stock_symbol + "/n lowest: " + low + "/n highest: " + high)
		var jsonString = "{\"symbol\":\"" + req.params.stock_symbol + "\", \"lowest\":\"" + low + "\", \"highest\":\"" + high + "\" }";
		//var jsonString = "{\"key\":\"value\", \"key2\":\"value\"}";

		var jsonObj = JSON.parse(jsonString);
		res.json(jsonObj);
	  //res.json(stock_symbol: req.params.stock_symbol, lowest: low, highest: high);
  });
}
  
function getMaxY(trade) {
	var max = 0 
	for (var i=0; i < trade.length; i++){
		if(trade[i].price_of_stock > max){
			max = trade[i].price_of_stock;
		}
	}
	return max
}
function getMinY(trade) {
	var min = trade[0].price_of_stock
	for (var i=0; i < trade.length; i++){
		if(trade[i].price_of_stock < min){
			min = trade[i].price_of_stock;
		}
	}
	return min
}