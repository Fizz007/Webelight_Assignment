const Product = require("../model/product");

//GET
const getProduct = async (req, res) => {
  try {
    const findProduct = await Product.find();

    res.status(200).json({ message: "products shown", product: findProduct });
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
};

//CREATE
const createProduct = async(req, res) =>{
    const newProduct = new Product(req.body);

    try{
     const savedProduct = await newProduct.save();
     res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err)
    }
}


//UPDATE
const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  
//DELETE
const deleteProduct = async(req, res) => {
  try{
  await Product.findByIdAndDelete(req.params.id)
  res.status(200).json("Product has been deleted... ")
  }catch(err){
    res.json(500).json(err)
  }
}


//GET PRODUCT
const getSinglePoduct = async(req, res) => {
  try{
   const product = await Product.findById(req.params.id)
   res.status(200).json(product);
  }catch(err){
    res.json(500).json(err)
  }
}


module.exports = { getProduct, getSinglePoduct,deleteProduct,updateProduct,createProduct };
