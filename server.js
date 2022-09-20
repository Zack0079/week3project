const exp = require("express")
const app = exp();
// const home = require('')

function middleware(req,res,next){};

app.get("/",(req, res)=>{
    res.send("Home Page");
    //    res.sendFile('home.html', {root: __dirname});
})

app.get("/about",(req, res)=>{
    res.send("About Us");
})

app.get("/products",(req, res)=>{
    res.send("Products");
})

app.post("/login",(req, req)=>{
    res.send("Login");
})

const port = process.env.PORT || 3000
console.log(port);
app.listen(port);
