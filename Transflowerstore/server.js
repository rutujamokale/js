var express = require('express');
var path = require('path');
var fs = require("fs");

var sql=require('./mysqlconnect');

var credentials = require("./data/credentials.json");
var flowers = require("./data/flowers.json");
var customers = require("./data/customers.json");

var app = express();

var connection=mysql.createConnection(dbServer);

connection.connect(function(err){
    console.log("123456789")
    console.log(err);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/api/roles",
        (req,res)=>{
                var selectAllQuery="select *from roles";
                 sql.query(selectAllQuery,function(err,data){
                if(err){
                    console.log("error:" + err);
                }
                else{
                    res.send(data);
                }
            });
           // res.send(data);

        });


app.post("/api/roles",
            (req,res)=>{
                var newrole=req.body;
                var insertQuery="insert into roles (id,name,lob) values(?,?,?)";

                sql.query(insertQuery,[newrole.id,newrole.name,newrole.lob],function(err,data){
                    if(err){
                        console.log("error:" +err);
                    }
                    else
                    {
                        response.send(data);
                    }
                });


            });



app.get("/api/customers", (req, res) => {
    res.send(customers);
});



app.get("/api/customers/:id", (req, res) => {
    let id = req.params.id;
    let customer = customers.find(c => c.id == id);
    res.send(customer || {});
});

app.post("/api/customers", (req, res) => {
    let newCustomer = req.body;
    customers.push(newCustomer);

    fs.writeFile("./data/customers.json", JSON.stringify(customers), (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send("Failed to save customer");
        }
        console.log("Customer saved");
        res.send("New customer is inserted to collection");
    });
});

app.put("/api/customers/:id", (req, res) => {
    let id = req.params.id;
    let index = customers.findIndex(c => c.id == id);

    if (index >= 0) {
        customers[index] = req.body;

        fs.writeFile("./data/customers.json", JSON.stringify(customers, null, 2), (err) => {
            if (err) return res.status(500).send("Failed to update customer");
            res.send("Customer updated successfully");
        });
    } else {
        res.status(404).send("Customer not found");
    }
});
app.delete("/api/customers/:id", (req, res) => {
    let id = req.params.id;
    customers = customers.filter(c => c.id != id);

    fs.writeFile("./data/customers.json", JSON.stringify(customers, null, 2), (err) => {
        if (err) return res.status(500).send("Failed to delete customer");
        res.send("Customer deleted successfully");
    });
});

app.get("/api/flowers", (req, res) => {
    res.send(flowers);
});

app.get("/api/flowers/:id", (req, res) => {
    let id = req.params.id;
    let flower = flowers.find(product => product.id == id);
    res.send(flower || {});
});

app.delete("/api/flowers/:id", (req, res) => {
    let id = req.params.id;
    flowers = flowers.filter(f => f.id != id);

    fs.writeFile("./data/flowers.json", JSON.stringify(flowers, null, 2), (err) => {
        if (err) return res.status(500).send("Failed to delete flower");
        res.send("Flower removed successfully");
    });
});

app.post("/api/login", (req, res) => {
    const user = req.body;

    const match = credentials.find(
        c => c.username === user.username && c.password === user.password
    );

    if (match) {
        res.json({ message: "Valid User" });
    } else {
        res.json({ message: "Invalid User" });
    }
});

app.post("/api/register", (req, res) => {
    let newCustomer = req.body;
    customers.push(newCustomer);

    fs.writeFile("./data/customers.json", JSON.stringify(customers, null, 2), (err) => {
        if (err) return res.status(500).send("Failed to register");
        res.send("Customer registered successfully");
    });
});

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});
