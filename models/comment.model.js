const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
     userid:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:[,"userid is required"]},
  text:{type:String,required:[true,"text body of comment is required"]}
},
{timestamps:true}
)

module.exports = CommentSchema