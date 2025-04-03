import Product from "../module/productsSchema.js";
import Cart from "../module/cartSchema.js"



//getting all the items in the cart
export const getCartItems=async(req,res)=>{
    try {
        const cartItems=await Cart.find()
        if(cartItems.length===0){
            return res.status(404).json({message:"Cart Empty"})
        }
        res.status(200).json({data:cartItems})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//add new item into the cart
export const addCart=async(req,res)=>{
    try {
    const {productId,quantity}=req.body;
    const product=await Product.findById(productId);
    if(!product){
        return res.status(404).json({message:"Product Not Found"})
    }

    let cartItem=await Cart.findOne({productId})
    if(cartItem){
        cartItem.quantity+=quantity;
        await cartItem.save();
        return res.status(200).json({ message: "Cart updated", data: cartItem });
    }
    const newCartItem=new Cart({
        productId,
        name:product.name,
        description:product.description,
        price:product.price,
        quantity
    })

    await newCartItem.save();
    res.status(201).json({
        message:"Item added to Cart",
        data:newCartItem
        
    })
} catch (error) {
      res.status(500).json({
        message:error.message
      })  
}
}


//updating cart item quantity using put method

export const updateCartQuantity=async(req,res)=>{
    try {
        const {id}=req.params;
        const {quantity}=req.body;

        const cartItem=await Cart.findById(id);
        if(!cartItem){
            return res.status(404).json({
                message:"cart Item Not found"
            })
        }
       // checking if quantity is at least 1
       if (quantity < 1) {
        await Cart.findByIdAndDelete(id); // Remove item if quantity is 0 or less
        return res.status(200).json({ message: "Item removed from cart" });
    }

    // Update quantity
    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: "Cart updated", data: cartItem });

} catch (error) {
    res.status(500).json({ message: error.message });
}
}


//remove cart item

export const removeCartitem=async(req,res)=>{
    try {
        

    const {id}=req.params;
    const cartItem=await Cart.findByIdAndDelete(id);
    if(!cartItem){
        return res.status(404).json({
            message:"item Not found"
        })
    }

    res.status(200).json({message:"cart Item removed"})
} catch (error) {
       res.status(500).json({
        message:error.message
       }) 
}

}