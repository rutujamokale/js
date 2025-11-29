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

     var getById=function(id){
           var selectByIdQuery="select * from roles where id=?";
        connection.query(selectByIdQuery,[id],function(err, data){
        if(err){
            console.log("error: "+err);
        }
        else{
            console.log( "get by id result:",data);
        }
         
    });

    };

        var selectAll=function(){
            var selectAllQuery="select * from roles ";
            connection.query(selectAllQuery,function(err,data){
                if(err){
                    console.log("error:" + err);
                }
                else{
                    console.log("return all data",data);
                }
            });
        };


    var removeById = function (id) {
    if (!id) {
        console.log("Error: id is required");
        return;
    }

    var removeQuery = "DELETE FROM roles WHERE id = ?";

    connection.query(removeQuery, [id], function (err, data) {
        if (err) {
            console.log("error:", err);
        } else {
            console.log("Delete result:", data);
        }
    });
};
    

     var updateById=function(id){
            var updateQuery = "UPDATE roles SET name = 'student' WHERE id = ?";

            connection.query(updateQuery,[id],function(err, data){
        if(err){
            console.log("error: "+err);
        }
        else{
            console.log(data);
        }
         
    });
    };
//    getById(3);

//     removeById(12);
//     updateById(13);
        selectAll();
   
    
