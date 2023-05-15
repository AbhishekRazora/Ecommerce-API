const Product=require('./../Models/productsModel')
const customError=require("./../Utils/customErrorHandler")
const asyncErrorHandler=require("./../Utils/asyncErrorHandler")
//controller to get all products
exports.getProducts=asyncErrorHandler( async (req,res)=>{
    
   let products=await  Product.find({})
   res.status(200).json({
    status:"success",
    length:products.length,
    data:{
        products
    }
   })
    
})
// controller to get product by ID
exports.getProduct=asyncErrorHandler( async (req,res)=>{
    
        
    let product=await Product.findById(req.params.id)
    if(!product){
        const error=new customError("Product with that ID is not found",404)
        return next(error)
    }
        res.status(200).json({
            status:"success",
            data:{
                product
            }
        }) 
   
})
// controller to create product
exports.createProduct=asyncErrorHandler(async (req,res)=>{
    
      const product=  await Product.create(req.body)
       res.status(201).json({
        status:"success",
        data:{
            product
        },
        message:"Product created successfully"
       })
   
})

// controller to update product using ID
exports.updateProducts=asyncErrorHandler( async (req,res)=>{
    
        let updateProduct= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(201).json({
            status:"Success",
            data:{
                product:updateProduct
            }
        })
    
})
// controller to delete product using Id
exports.deleteProduct= asyncErrorHandler( async (req,res)=>{
    
         await Product.findByIdAndDelete(req.params.id)
         res.status(200).json({
            status:"success",
            message:"delete successfully"
         })
       
})
// controller to update quantity of product
exports.updateProduct=asyncErrorHandler( async (req,res)=>{
    
        let UpdateQuantity=req.query.number
        if(! UpdateQuantity){
          res.status(400).json({
            status:"fail",
            message:"Please provide number"
          })
          return
        }
        
        
        let id=req.params.id
        let update= await Product.findById(req.params.id)
        // console.log(update)
        let newQuantity=(update.quantity*1) +(+UpdateQuantity)
        // console.log(newQuantity)
        if(newQuantity>0){
            const updateProduct=await Product.findByIdAndUpdate(id,{quantity:newQuantity},{new:true,runValidators:true})
            res.status(200).json({
                status:"Success",
                product:{updateProduct},
                message:"Successfully updated"
            })
        }else{
            res.status(400).json({
                status:"fail",
                message:"Product quantity must be greater than zero"
            })
            return
        }
    

   
})
