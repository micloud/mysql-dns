"use strict";

var dns = require('native-dns/dns'),
  server = dns.createServer();

server.on('request', function (request, response) {
  console.log('Query of ' + request.question[0].name);
  var dname = request.question[0].name;
  response.answer.push(dns.A({
    name: 'aa.tb.micloud.tw',
    address: '222.111.233.222',
    ttl: 600,
  }));
	
	response.additional.push(dns.A({
	  name: 'aa.bb.com.tw',
	  address: '11.22.33.44',
	  ttl: 600,
	}));
	
  response.send();
});

server.on('error', function (err, buff, req, res) {
  console.log(err.stack);
});

server.on('listening', function () {
  console.log('server listening on', this.address());
  //this.close();
});

server.on('socketError', function (err, socket) {
  console.log(err);
});

server.on('close', function () {
  console.log('server closed');
});

server.serve(53, '211.78.245.44');
//server.serve(15353, '127.0.0.1');
