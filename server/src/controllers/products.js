const productModel = require('../models/product');
const uploads = require('../utils/cloudinaryUpload');

exports.addProduct = async(req,res) =>{
    try {
        const {name,isVeg,price,description,quantity} = req.body;
        let provider = req.provider._id;
        let image = ""
        if(req.file){
            const location = req.file.buffer;
            const result = await uploads(location);
            image = result.url
        }
        const updatedData = {
            name,
            isVeg,
            price,
            provider,
            image,
            enteredQuantity:quantity,
            quantity,
            description
        }
        const product = await productModel.create(updatedData);

        return res.status(200).json({product});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getAllProductsOfProvider = async(req,res) =>{
    try {
        const {_id} = req.params;
        const products = await productModel.find({provider:_id}).populate("provider");

        if(!products)
            return res.status(404).json({message:"NO Products Found"})
        return res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

exports.getProductById = async(req,res) =>{
    try {
        const {_id} = req.params;
        if(!_id)
            return res.status(400).json({message:"Unable to get Products"});
        
        const product = await productModel.findById(_id).populate("provider");

        if(!product)
            return res.status(404).json({message:"No products Found"});

        return res.status(200).json({product})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.deleteProduct = async(req,res) =>{
    try {
        const {_id} = req.params;

        if(!_id)
            return res.status(404).json({message:"Invalid Request"})
        
        const product = await productModel.findByIdAndDelete(_id);

        return res.status(201).json({product});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}