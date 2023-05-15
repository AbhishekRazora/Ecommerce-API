const express=require('express')
const app=express()
const productsRouter=require('./Routes/productsRoute')
const customError=require('./Utils/customErrorHandler')
const globalErrorHandler=require('./Controllers/errorController')
app.use(express.json())


// main router for our application
app.use('/products',productsRouter)

//global router for handling all wrong url
app.all('*',(req,res,next)=>{
    const err=new customError(`can't find ${req.originalUrl} on the server`,404)
    next(err)
})

//global error handler
app.use(globalErrorHandler)


module.exports=app