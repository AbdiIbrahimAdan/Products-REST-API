import express from 'express';


const app = express();


app.get("/product", (req, res) =>{
    res.send("get all the product");
})

app.get("/products/:id", (req, res) =>{
    res.send("get the single product");
})


app.post("/products", (req, res) =>{
    res.send("create the product");
})
app.patch("/products/:id", (req, res) =>{
    res.send("update the product");
})
app.delete("/products/:id", (req, res) =>{
    res.send("delete all the product");
})

app.listen(3000, () =>{
    console.log("Server Running on port 3000")
})