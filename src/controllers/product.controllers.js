import pool from "../db.config.js";
export const getAllProducts = async(req, res) =>{
    try{
     const result = await pool.query('SELECT * FROM products');
     res.status(200).json({success:true, data:result.rows});
    }
    catch(err){
     res.status(500).send({success:false, message:err.message});
    }
 };
 export const createProduct = async(req, res) =>{
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
    try{
        const result = await pool.query(
            'insert into products (productThumbnail, productTitle, productDescription, productCost, onOffer) values($1, $2, $3, $4, $5) RETURNING *',
            [productThumbnail, productTitle, productDescription, productCost, onOffer]
        );
        res.status(201).json(result.rows[0]);
    }
    catch(err){
        res.status(500).send(err.message);
    }
};
export const getSingleProduct =  async(req, res) =>{
    const {id} = req.params;
    try{
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (result.rows.length === 0){
            return res.status(404).send('Product Not Found');
        }
        res.json(result.rows[0]);
    }catch(err){
        res.status(500).send(err.message);
    }
};
export const updateProduct = async(req, res) =>{
    try{
        const { id } = req.params;
        const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
        const productUpdate=await pool.query("UPDATE products SET productThumbnail=$1, productTitle=$2, productDescription=$3, productCost=$4, onOffer=$5 WHERE id=$6", [productThumbnail, productTitle, productDescription, productCost, onOffer, id ])
        if (productUpdate.rowCount=== 1){
            res.status(200).json({success:true, message: "product updated successfully"});
        }
        else{
            res.status(400).json({success:false, message: "invalid product"});
        }
     
    }catch(err){
     res.status(500).json({success:false, message:err.message});
    }
};
export const updateAllProductInfo = async(req, res) =>{
    const { id } = req.params;
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
    try{
     const result = await pool.query(
         'UPDATE products SET productThumbnail = $1, productTitle = $2, productDescription = $3, productCost= $4, onOffer = $5 WHERE ID = $6 RETURNING *',
         [productThumbnail, productTitle, productDescription, productCost, onOffer, id]
     )
     if (result.rows.length === 0){
         return res.status(404).send('Product Not Found');
     }
     res.json(result.rows[0]);
    }catch(err){
     res.status(500).send(err.message);
    }
 };

 export const deleteProduct =  async(req, res) =>{
    const {id} = req.params;
    try{
        const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0){
            return res.status(404).send('Product Not Found');
        }
        res.send('Product deleted Successfully');
    }catch(err){
        res.status(500).send(err.message);
    }
}; 
