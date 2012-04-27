var config = require('./mysql-config'), 
		db = config.db,
		sysconf = require('../conf/default'),
		util = require('../lib/util');

exports.queryByDomain = function(domain_name, callback) {
  var sql = 'select ip_address as ? from tb_dns_record where domain_name = ? ';
  var cond = [domain_name, domain_name];
	util.info('SQL:' + sql);
	util.info('Cond:' + cond);
  db.query(sql,cond, 
  	function(err, rows, fiels) {
      if(err) {
		  	util.info('Query with exception:' + err);
	  	}
		  if(rows != null && rows.length > 0 && rows[0] !=null){
			  util.info('Got result: ' + JSON.stringify(rows[0]));
			  callback(rows[0]);
			} else {
			  util.log('Got no result from DB of ' + domain_name + ' ....');
			  callback(null);
			}
  });
}
