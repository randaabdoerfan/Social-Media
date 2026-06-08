const mongoose = require("mongoose")
const CommentSchema = require("./comment.model.js")
const { applyTimestamps } = require("./user.model.js")
const postSchema = mongoose.Schema({
     userid:{type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,"userId is required"]},
    title:{type:String,
        required:[true,"title is required"],
        maxlength:[10,"the length is over 10"]},
    id:{type:mongoose.Schema.ObjectId},
    body:{type:String,required:[true,"body is required"]},
    comments:[CommentSchema]
},{timestamps:true})

module.exports = mongoose.model("Posts", postSchema)