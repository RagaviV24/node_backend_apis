const Product = require('../models/product.model');  

//create a product
const createproduct = async (req, res) => {
  try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

//retrieve all the item from the database
const getproducts=async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }   
}

//retrieve  the single  item from the database
const getproduct=async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // Correct function
    
        
    
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

//update the product details
const updateproduct=async (req,res)=>{
    try {
        const { id } = req.params;
    
        const product = await Product.findByIdAndUpdate(id, req.body, {
        
        });
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

//delete a product 
const deleteproduct=async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    createproduct,
    getproducts,
    getproduct,
    updateproduct,
    deleteproduct
};