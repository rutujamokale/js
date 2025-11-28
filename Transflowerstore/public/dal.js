var mysql=require('mysql');
var dbServer={
    host:'localhost',
    user:'root',
    password:'password',

    database:assessmentdb
}
var connection=mysql.createConnection();
connection.connect(function(err){
    console.log(err);
});
