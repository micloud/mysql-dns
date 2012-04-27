var sysconf = require('../conf/default');
exports.log = function(msg) {
	if(sysconf.log == 'Y')
		console.log('['+new Date()+'] ' + msg);
}

exports.info = function(msg) {
	if(sysconf.infolog == 'Y')
    console.log('['+new Date()+'] ' + msg);
}
