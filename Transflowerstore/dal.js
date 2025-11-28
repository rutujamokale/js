var mysql=require('mysql');
var dbServer={
    host:'localhost',
    user:'root',
    password:'password',
    database:'assessmentdb'
}
var connection=mysql.createConnection(dbServer);

connection.connect(function(err){
    console.log("123456789")
    console.log(err);
});

    var selectAllQuery="select * from roles";
    var selectByIdQuery="select * from roles where id=1";
    var deleteQuery="delete from roles where id=20";
    var updateQuery = "UPDATE roles SET name = 'student' WHERE id = 19";


    connection.query(selectAllQuery,function(err, data){
        if(err){
            console.log("error: "+err);
        }
        else{
            console.log(data);
        }
    });
   
    
