var db = require('./dns-router');

db.queryByDomain('www.abc.com.tw', function(result){
	console.log(result);		
});
