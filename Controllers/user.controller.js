const CommentSchema = require('../models/comment.model')
const User = require('../models/user.model')
const Apperror = require("../utitles/Apperror.js");

//getallusers
exports.getallusers =async(req,res,next)=>{
   try{
     const allusers =await User.find()
    res.status(200).json(allusers,{message:"there all find users"})
   }catch(err){next(err)}
}
//get userbyid
 exports.getuserbyid=async(req,res,next)=>{
    // const id = req.params.id
    try{
    const existuser = await User.findById(req.params.id)
    if(!existuser){
                throw AppError("User not exist",400);
            }
    res.status(200).json(existuser)
         }catch(err){next(err)}
}
//create user 
exports.createuser =async(req,res,next)=>{
    // const {name,email,password}=req.body
    try{
    const newuser = new User(req.body)
     if(!newuser){
            throw AppError("User not exist",400);
            }
    await newuser.save()
    console.log(`hello, ${req.body.name}`)
    res.status(201).json({message:'user created Done',newuser})
    next()
         }catch(err){next(err)}
}
//update user 
exports.edituser=async(req,res,next)=>{
   try{
    const updateuser =  await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!updateuser){
                throw AppError("User not exist",400);
            }
    res.status(200).json(updateuser)
         }catch(err){next(err)}
}
//par update 
exports.updateuser =async(req,res,next)=>{
   try{
    const updated =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
     if(!updated){
                throw AppError("User not exist",400);
            }
    res.status(200).json(updated,{message:"user updated"})
   }catch(err){next(err)}
}

//delete user 
exports.DeleteUser =async(req,res,next)=>{
   try{
     const deleteduser =await User.findByIdAndDelete(req.params.id)
     if(!deleteduser){
      throw AppError("the user not found",400)
     }
    res.status(200).json(deleteduser,{message:"user deleted"})
   }catch(err){console.log(err)}
}
//query string

exports.filteruser =async(req,res,next)=>{
   try{
      if(req.query.name){
          const filtered =await User.find({name:req.query.name})
          if(!filtered){
            throw AppError("user not found",400)
          }
   //   const filtered =await User.find({name:req.query,name})

    res.status(200).json(filtered,{message:"user filtered here"})
      }

    
   }catch(err){next(err)}
}

