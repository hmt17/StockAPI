// routes to functions for each call
'use strict';
module.exports = function(app) {
  var stockControllers = require('../controllers/stockController');

  app.route('/trades')
	.get(stockControllers.read_trades)
    .post(stockControllers.create_a_trade)
    .delete(stockControllers.delete_trades);

  app.route('/stocks/:stock_symbol/trades')
  	.get(stockControllers.trades_for_stock);
	
  app.route('/stocks/:stock_symbol/price')
  	.get(stockControllers.price_for_stock);
};