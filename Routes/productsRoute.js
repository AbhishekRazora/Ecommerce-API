const express=require('express')
const productsController=require('./../Controllers/productsController')
const router=express.Router()
router.route("/")
   .get(productsController.getProducts)
 
router.route("/create")
    .post(productsController.createProduct) 

router.route("/:id")
       .get(productsController.getProduct)
       .patch(productsController.updateProducts)
      .delete(productsController.deleteProduct)
router.route("/:id/update_quantity")
       .post(productsController.updateProduct) 
       
module.exports=router       