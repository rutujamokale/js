var mysql=require('mysql');
var dbServer={
    host:'localhost',
    user:'root',
    password:'password',

    database:'assessmentdb'
}
var connection=mysql.createConnection();
connection.connect(function(err){
    console.log(err);
});

    var selectQuery="select * from roles";


    connection.query(selectQuery,function(err, data){
        if(err){
            console.log("error: "+err);
        }
        else{
            console.log(data);
        }
    });
    console.log("such a simple way to access data from tables");
    