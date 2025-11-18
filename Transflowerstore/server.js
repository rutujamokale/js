
var express= require('express');
var path=require('path');

var app=express();


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
                {"id":4, "firstname":"sanika","lastname":"bhor","email":"sanikabhor@gmail.com","contactnumber":"9425135020"},
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

app.get("/api/customers",(request,response)=>{
    response.send(customers);
})


app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});


