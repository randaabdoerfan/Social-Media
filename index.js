const mongoose = require("mongoose")
const express = require("express")
const app = express()
const fs = require('fs')
const path = require('path')
const dontenv = require('dotenv')
dontenv.config({path:'./config.env'})
const postroute = require('./Routes/post.route.js')
const userroute = require('./Routes/user.route.js')
const authroute = require('./Routes/auth.route.js')
const {sayhello} = require('./Middlewares/userhello.middleware.js')
const errorHandler =require('./Middlewares/handleError.middleware.js')
const morgan = require('morgan')
// const {numberopposts} = require('./Middlewares/numberofpost.middleware.js')
mongoose.connect(process.env.mongo_atlas)
.then(()=>{
    console.log("Database connected...")
})
.catch(err=>console.log(err))
const Streamlogs = fs.createWriteStream(
    path.join('./logs','file.log'),
    {flags:'a'})
app.use(express.json())
app.use(morgan('combined',{stream : Streamlogs}))
app.use('/posts',postroute)
// app.use(sayhello)
app.use('/users',userroute)
app.use('/auth',authroute)
app.use(errorHandler)

// number of total posts
// app.use(numberopposts)

const port = process.env.port||3000
///say hello after each route from users


app.listen(process.env.port,'127.0.0.1',()=>{
    console.log("server runing...")
})

