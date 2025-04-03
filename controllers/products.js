import Product from "../module/productsSchema.js"

export const getProducts= async(req,res)=>{
  Product.find().then(data=>{
    if(!data){
        return res.status(400).send("No Products")
    }
    res.json({data:data})
  }).catch(err=> res.status(500).json({message:err.message})
    
  )   
}

export const getProductById=async(req,res)=>{
    try {
        const productId=req.params.id
        const product=await Product.findById(productId);
        if(!product){
            return res.status(400).json({
                message:"No Product Found"
            })
        }
        res.status(200).json({
            message:`Product details for id ${productId}`,
            data:product
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const addProducts=async(req,res)=>{
    try {
        const {name,price,description,image,stockquantity}=req.body;

        const newProduct=new Product({
            name,
            price,
            image,
            description,
            stockquantity
        })

        await newProduct.save();

        res.status(200).json({
            message:"Successfully add new Produt",
            data:newProduct
        })

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const removeProducts=async(req,res)=>{
    try {
        const {id}=req.params;
        const productItem=await Product.findByIdAndDelete(id);
        if(!productItem){
            return res.status(404).json({
                message:"No Product found"
            })
        }
        res.status(200).json({message:"Product removed"})   
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

