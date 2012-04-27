"use strict";

var dns = require('native-dns/dns'),
  server = dns.createServer(),
	db = require('./lib/dns-router'),
	util = require('./lib/util'),
	sysconf = require('./conf/default'),
	root = sysconf.root;

server.on('request', function (request, response) {
  	var _reqs = request.question[0].name;
		util.info('Query of ' + _reqs + '...');
		if(_reqs.endsWith(root)){
  		db.queryByDomain(_reqs, function(_ans){
				if(_ans != null && _ans[_reqs]){
	  			util.log('Query of ' + _reqs + ' OK! Response:' + _ans[_reqs]);
					response.answer.push(dns.A({
	    			name: _reqs,
	    			address: _ans[_reqs],
	    			ttl: 600,
	  			}));
					response.additional.push(dns.A({
			    	eame: _reqs,
			    	address: _ans[_reqs],
			    	ttl: 600,
			  	}));
				} else {
	  			util.log('No record!!! Query of:' + _reqs);
				}
  			response.send();
			});
		}else {
			util.log('No a domain of ' + root);
			response.send();
		}
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

server.serve(sysconf.serverport, sysconf.serverip);

String.prototype.endsWith = function(suffix) {
  return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
