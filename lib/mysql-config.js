var sysconf = require('../conf/default');
var db_options = {
    host: sysconf.dbhost,
    port: sysconf.dbport,
    user: sysconf.dbuser,
    password: sysconf.dbpasswd,
    database: sysconf.dbname
};

var mysql = new require('mysql'), db = null;
if(mysql.createClient) {
    db = mysql.createClient(db_options);
} else {
    db = new mysql.Client(db_options);
    db.connect(function(err) {
        if(err) {
            console.error('connect db ' + db.host + ' error: ' + err);
            process.exit();
        }
    });
}
exports.db = db;
