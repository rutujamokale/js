
var express= require('express');
var path=require('path');

var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");


var app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/api/flowers",(request,response)=>{
    response.send(flowers);
})

app.get("/api/flowers/:id",(request,response)=>{
    let id=request.params.id;
     let flower=flowers.find(product=>product.id==id);
     response.send(flower);
})

app.get("/api/customers",(request,response)=>{
    response.send(customers);
})

app.put("/api/customers/:id",(request,response)=>{
    var customerTobeUpdated=request.body;
    console.log("data to be updated at customers @server ");
    console.log("customerTobeUpdated");
    response.send("customer data updated");
})

app.post("/api/login", (req, res) => {
    const user = req.body;

    const match = credentials.find(
        c => c.username === user.username && c.password === user.password
    );

    if (match) {
        res.json({ message: " valid User" });
    } else {
        res.json({ message: "Invalid User" });
    }
})

app.post("/api/register",(req,res)=>{
  var newCustomer=req.body;
  customers.push(newCustomer);
  res.send("customer register sucessfully");
});
app.delete("/api/flowers/:id",(req,res)=>{
  let id=req.params.id;
  let remainingFlowers=flowers.filter(f=>f.id!=id);
  flowers=remainingFlowers;
  res.send("flowers is removed");

}) ;

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});


