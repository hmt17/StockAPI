mongoose = require('mongoose'),
Trade = require('../api/models/stockModel')

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('Trade', () => {
	
	//Before tests start empty the database
	describe('/DELETE all trades', () => {
		it('it should delete all the trades', (done) => {
			chai.request(server)
				.delete('/trades')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
				done();
			});
		});
	});
    // check database is empty
    describe('/GET all trades', () => {
      it('it should GET all the trades', (done) => {
        chai.request(server)
            .get('/trades')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
        });
    });
    describe('/POST trade 1', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"smartthings",user:{user_id:"734-234",user_name:"JR"},trade_type:"smartthingstype",
		stock_symbol:"smartthingssymbol",number_of_shares:22,price_of_stock:22.44,timestamp:new Date("2019-10-01 01:11:11")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 2', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung1",user:{user_id:"734-235",user_name:"tomas"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:41,price_of_stock:410.40,timestamp:new Date("2015-04-10 12:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 3', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung7",user:{user_id:"734-234",user_name:"JR"},trade_type:"samsungtype",stock_symbol:"@samsung",
		number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2000-07-11 00:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 4', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung2",user:{user_id:"734-236",user_name:"jack hill"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:6,price_of_stock:60.20,timestamp:new Date("2015-04-11 12:13:13")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 5', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung6",user:{user_id:"734-238",user_name:"Hannah"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2015-03-11 12:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 6', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"smartthings5",user:{user_id:"734-200",user_name:"fake_name"},trade_type:"smartthingstype",
		stock_symbol:"smartthingssymbol",number_of_shares:20,price_of_stock:122.40,timestamp:new Date("2018-11-11 12:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 7', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"smartthings4",user:{user_id:"734-238",user_name:"Hannah"},trade_type:"smartthingstype",
		stock_symbol:"smartthingssymbol",number_of_shares:33,price_of_stock:225.00,timestamp:new Date("2018-04-10 12:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 8', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung3",user:{user_id:"734-245",user_name:"jill hill"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:320,price_of_stock:3400.40,timestamp:new Date("2014-04-11 00:12:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 9', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"smartthings2",user:{user_id:"745-234",user_name:"JR_T"},trade_type:"smartthingstype",
		stock_symbol:"smartthingssymbol",number_of_shares:66,price_of_stock:660.00,timestamp:new Date("2015-05-01 12:00:12")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 10', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung4",user:{user_id:"734-255",user_name:"fake_user"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2016-03-03 00:00:00")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 11', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"smartthings3",user:{user_id:"744-244",user_name:"user_name"},trade_type:"smartthingstype",
		stock_symbol:"smartthingssymbol",number_of_shares:55,price_of_stock:67.99,timestamp:new Date("2017-03-02 05:00:00")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/POST trade 12', () => {
      it('it should POST a trade', (done) => {
        let trade={trade_id:"samsung5",user:{user_id:"734-237",user_name:"hannah_fake"},trade_type:"samsungtype",
		stock_symbol:"@samsung",number_of_shares:123,price_of_stock:1100.77,timestamp:new Date("2017-03-02 00:00:00")}
        chai.request(server).post('/trades').send(trade)
			.end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
				done();
            });
		});
	});
	describe('/GET all specific stocks trades', () => {
      it('it should GET all the stocks trades between start and end timestamp', (done) => {
        chai.request(server)
            .get('/stocks/@samsung/trades?start=2015-04-11 12:12:12&end=2016-03-03 00:00:00')
            .end((err, res) => {
				//for debugging and validation purposes
				console.log(res.body);
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(2);
              done();
            });
        });
	}); 
	describe('/GET specific stocks high/low', () => {
      it('it should GET highest and lowest prices for smartthings', (done) => {
        chai.request(server)
            .get('/stocks/smartthingssymbol/price')
            .end((err, res) => {
				console.log(res.body);
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.lowest.should.be.eql('22.44');
				res.body.highest.should.be.eql('660');
              done();
            });
      });
	}); 
	describe('/GET all trades after posts', () => {
      it('it should GET all the trades after post', (done) => {
        chai.request(server)
            .get('/trades')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(12);
            done();
            });
      });
  }); 
	//empty the database using DELETE /trades
	describe('/DELETE all trades', () => {
		it('it should delete all the trades', (done) => {
			chai.request(server)
				.delete('/trades')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
				done();
		});
	});
});
    // check that DELETE /trades worked
    describe('/GET all trades after delete', () => {
      it('it should GET 0 trades', (done) => {
        chai.request(server)
            .get('/trades')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
            done();
            });
      });
  });
});

/*  I had tried condensing the POST functions all into 1, but I was unable to get it working with the done() command
  describe('/POST trade JR', () => {
      it('it should POST a trade', (done) => {
        let trade=[{trade_id:"smartthings",user:{user_id:"734-234",user_name:"JR"},trade_type:"smartthingstype",stock_symbol:"smartthingssymbol",number_of_shares:22,price_of_stock:22.44,timestamp:new Date("2019-10-01 01:11:11")},
				{trade_id:"samsung1",user:{user_id:"734-235",user_name:"tomas"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:41,price_of_stock:410.40,timestamp:new Date("2015-04-11 12:12:12")},
				{trade_id:"samsung2",user:{user_id:"734-236",user_name:"jack hill"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:6,price_of_stock:60.20,timestamp:new Date("2015-04-11 12:12:12")},
				{trade_id:"samsung3",user:{user_id:"734-245",user_name:"jill hill"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:320,price_of_stock:3400.40,timestamp:new Date("2014-04-11 00:12:12")},
				{trade_id:"smartthings2",user:{user_id:"745-234",user_name:"JR_T"},trade_type:"smartthingstype",stock_symbol:"smartthingssymbol",number_of_shares:66,price_of_stock:660.00,timestamp:new Date("2015-05-01 12:00:12")},
				{trade_id:"samsung4",user:{user_id:"734-255",user_name:"fake_user"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2016-03-03 00:00:00")},
				{trade_id:"smartthings3",user:{user_id:"744-244",user_name:"user_name"},trade_type:"smartthingstype",stock_symbol:"smartthingssymbol",number_of_shares:55,price_of_stock:67.99,timestamp:new Date("2017-03-02 05:00:00")},
				{trade_id:"samsung5",user:{user_id:"734-237",user_name:"hannah_fake"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:123,price_of_stock:1100.77,timestamp:new Date("2017-03-02 00:00:00")},
				{trade_id:"smartthings4",user:{user_id:"734-238",user_name:"Hannah"},trade_type:"smartthingstype",stock_symbol:"smartthingssymbol",number_of_shares:33,price_of_stock:225.00,timestamp:new Date("2018-04-10 12:12:12")},
				{trade_id:"smartthings5",user:{user_id:"734-200",user_name:"fake_name"},trade_type:"smartthingstype",stock_symbol:"smartthingssymbol",number_of_shares:20,price_of_stock:122.40,timestamp:new Date("2018-11-11 12:12:12")},
				{trade_id:"samsung6",user:{user_id:"734-238",user_name:"Hannah"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2015-04-11 12:12:12")},
				{trade_id:"samsung7",user:{user_id:"734-234",user_name:"JR"},trade_type:"samsungtype",stock_symbol:"@samsung",number_of_shares:14,price_of_stock:123.40,timestamp:new Date("2000-07-11 00:12:12")}]
		try {
			for (var i=0; i < trade.length; i++){
				if(i+1==trade.length) console.log(i);
					chai.request(server)
					.post('/trades')
					.send(trade[i])
					.end((err, res) => {
						  res.should.have.status(200);
						  res.body.should.be.a('object');
					});
			}
		}catch(done)
      });
  });
*/