export const productvalidation = (req, res, next) => {
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
    if (!productThumbnail){
        return res.status(400).json({success:false, message: "product productThumbnail is required"});
    }
}