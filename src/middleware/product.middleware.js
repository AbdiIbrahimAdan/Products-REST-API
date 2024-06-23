export const productvalidation = (req, res, next) => {
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
    if (!productThumbnail){
        return res.status(400).json({success:false, message: "product productThumbnail is required"});
    }
    if (!productTitle ) {
        return res.status(400).json({ success: false, message: "Product title is required" });
    }
    if (typeof productDescription !== 'string' || productDescription.length < 10) {
        return res.status(400).json({ success: false, message: "Product description must be a string with at least 10 characters" });
    }
    if (isNaN(productCost) || Number(productCost) <= 1) {
        return res.status(400).json({ success: false, message: "Product cost must be a valid number greater than 1" });
    }
    if (typeof onOffer !== 'boolean') {
        return res.status(400).json({ success: false, message: "Product offer status must be a boolean (true/false)" });
    }
    next();
};