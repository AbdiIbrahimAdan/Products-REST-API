import express from 'express';

import productRouter from './routes/product.routes.js'
const app = express();
app.use(express.json());
app.use("/products", productRouter)
app.listen(3000, () =>{
    console.log("Server Running on port 3000")
})