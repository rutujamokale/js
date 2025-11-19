
var express= require('express');
var path=require('path');

var app=express();

var credentials=[
        {"id":1,"username":"rutu","password":"rutu@123"},
          {"id":2,"username":"pranii","password":"pranee@123"},
            {"id":3,"username":"nikki","password":"nikki@123"},
              {"id":4,"username":"sanu","password":"sanu@123"}
];
var flowers = [
  {
    id: 1,
    name: "Rose",
    description: "Classic red rose, long-stemmed, fragrant — perfect for romantic bouquets.",
    unitPrice: 49.99,
    quantity: 120,
    likes: 50000
  },
  {
    id: 2,
    name: "Tulip",
    description: "Bright spring tulips in mixed colors; crisp petals and a cheerful look.",
    unitPrice: 29.5,
    quantity: 200,
    likes: 10000
  },
  {
    id: 3,
    name: "Orchid",
    description: "Elegant white phalaenopsis orchid, long-lasting and suitable for gifts.",
    unitPrice: 199.0,
    quantity: 45,
    likes: 20000
  },
  {
    id: 4,
    name: "Sunflower",
    description: "Large, sunny sunflowers with bold yellow petals — brightens any room.",
    unitPrice: 19.75,
    quantity: 300,
    likes: 5000
  }
];

var customers=[
    {"id":1, "firstname":"rutuja","lastname":"mokale","email":"rutumokale@gmail.com","contactnumber":"9525135020"},
        {"id":2, "firstname":"pranita","lastname":"mane","email":"pranitamane@gmail.com","contactnumber":"9525133040"},
            {"id":3, "firstname":"nikita","lastname":"bansode","email":"nikataban@gmail.com","contactnumber":"9125135020"},
                {"id":4, "firstname":"sanika","lastname":"bhor","email":"sanikabhor@gmail.com","contactnumber":"9425135020"}
];





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


