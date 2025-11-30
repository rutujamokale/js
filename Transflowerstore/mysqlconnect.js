var mysql = require('mysql'); 

var dbServer={
    host:'localhost',
    user:'root',
    password:'password',
    database:'assessmentdb'
};

var connection = mysql.createConnection(dbServer);

connection.connect(function(err){
    
   if(err)throw err;
});

module.exports=connection;
