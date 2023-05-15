const mongoose=require('mongoose')
const productsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required field"],
        unique:true,
        maxlength:[100,"Product name must not have more than 100 characters"],
        minlength:[2,"Product name must have atleast 2 charachters"]

    },
    quantity:{
      type:Number,
      required:[true,"Quantity is required field"],
      default:1.0
    }
})

const Product=mongoose.model("Product",productsSchema)
module.exports=Product