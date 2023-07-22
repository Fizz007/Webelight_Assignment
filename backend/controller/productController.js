const Product = require("../model/product");

//GET
const getProduct = async (req, res) => {
  try {
    const findProduct = await Product.find({});

    res.status(200).json({ message: "products shown", product: findProduct });
  } catch (err) {
    res.status(400).json({ message: "error" });
  }
};

//CREATE
const createProduct = async(req, res) =>{
   
    try {
      const savedProduct = Product.create(req.body);
      
      res.status(200).json({message:"product added", product:savedProduct});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
}


//UPDATE
const updateProduct = async (req, res) => {
   
    const { id } = req.params;
    console.log("get body", req.body);
    console.log("get id", id);
  
    try {
      const updatedProd = await User.findByIdAndUpdate(id, req.body, {new:true});
     
      res.status(200).json({message:"product updated", product: updatedProd});
    } catch (error) {
      res.send(error);
    }
  }

  
//DELETE
const deleteProduct = async(req, res) => {
  try{
  await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({message:"Product has been deleted... "})
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
