const mongoose=require('mongoose')
const express=require('express')
const dotenv=require("dotenv")
dotenv.config({path:'./config.env'})

// Handel Uncaught Exception which occur in application
process.on('uncaughtException',(err)=>{
    console.log(err.name,err.message)
    console.log("Uncaught Exception occur shutting down...")
    process.exit(1)
})


const app=require('./app')
app.use(express.json())

// connect to mongoDB using mongoose
mongoose.connect(process.env.CON_STR,{
    useNewUrlParser:true
}).then((conn)=>{
    console.log('connected to db successfully')
}).catch((err)=>{
    console.log(err)
})

// create and listen server using express
const port=process.env.PORT|| 5000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
