const customError=require('./../Utils/customErrorHandler')
// this method handel error when we are in developement environment
const devErrors=(res,error)=>{
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
        stackTrace:error.stack,
        error:error
    })
}



// this method is used to handle casting error
const castErrorHandler=(error)=>{
    const msg=`Invalid value for ${error.path} :${error.value}`
   return new customError(msg,400)

}



// This menthod is used to handled duplicate name of products
const duplicateKeyErrorHandler=(error)=>{
    const name=error.keyValue.name;
    const msg=`There is already a product with name ${name}. Please use another name`
    return new customError(msg,400)
}



// This method is used to handled validation error
const validationErrorHandler=(error)=>{
const errors=Object.values(error.errors).map(val =>
    val.message
)
const errorMessages=errors.join('.')
const msg=`Invalid input data : ${errorMessages}`
return new customError(msg,400)
}
const prodErrors=(res,error)=>{
    if(error.isOperational){

        res.status(error.statusCode).json({
            status:error.status,
            message:error.message
        })
    }else{
        res.status(500).json({
            status:'error',
            message:'something went wrong ! Please try again later'
        })
    }
}



// global error handler
module.exports=(error,req,res,next)=>{
        error.statusCode=error.statusCode || 500
        error.status=error.status || 'error'
        // console.log(process.env)
      if(process.env.NODE_ENV ==="development"){
        devErrors(res,error)
      }else if(process.env.NODE_ENV ==="production"){
        // let err={...error}
        if(error.name ==="CastError"){
           error= castErrorHandler(error)
        }
        
        if(error.code === 11000){ error=duplicateKeyErrorHandler(error)}
        if(error.name === 'ValidationError'){
            error= validationErrorHandler(error)
        }
        prodErrors(res,error)

      }
    }

// module.exports=((error,req,res,next)=>{
//         error.statusCode=error.statusCode || 500
//         error.status=error.status || 'error'
//         res.status(error.statusCode).json({
//             status:error.status,
//             message:error.message
//         })
//     })
   
