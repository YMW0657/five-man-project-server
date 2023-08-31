const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'five_man',
    password : 'five_man',
    database : 'five_man'
});
connection.connect((err)=>{
    if(err){
        console.log(`mysql error: ${err}!`);
    }
})
connection.on('error', function(err) {
    console.log(err.message);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('db error:'+err.message);
    } else {
        throw err;
    }
});
const db = {
    query(sql,callback){
        connection.query(sql, function (error, results) {
            callback(error,results)
        })
    }
}
module.exports = db