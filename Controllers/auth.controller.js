const User = require('../models/user.model')
const createtoken = require('../utitles/tokencreate.js')
const Apperror = require('../utitles/Apperror.js')
exports.register =async(req,res,next)=>{
    try{
    const {name,age,email,password,confirmpassword,role} = req.body
    const existEmail = await User.findOne({email})
    if(existEmail){
        throw Apperror("existed email",400)
    }
    const newUser = await new User({name,age,email,password,confirmpassword,role})
    await newUser.save()
    const token = createtoken({name:newUser.name,role:newUser.role,email:newUser.email,id:newUser._id})
    res.status(201).json({message:"user created",user:newUser,token})
}catch(err){next(err)}
}

exports.login= async(req,res,next)=>{
    try{
    const {email,password} = req.body
    const userlogin = await User.findOne({email})

    const ismatchpassword = await userlogin.comparePassword(password)
    if(!ismatchpassword){
    return Apperror("invaild password",400)
    }
    
    const token = createtoken({name:userlogin.name,role:userlogin.role,email:userlogin.email,id:userlogin._id})
    res.status(200).json({message:"successfully login",user:userlogin,token})
}catch(err){
    next(err)
}
}