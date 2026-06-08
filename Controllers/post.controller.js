const Post = require("../models/post.model.js")
const Apperror = require("../utitles/Apperror.js");

exports.getAllPosts = async (req, res,next) => {
    try {
        const posts = await Post.find()
        if(!posts){
            throw Apperror("Posts not found",400);
        }
        res.status(200).json(posts, { message: "you get all posts..." })
    } catch (error) { next(error) }
}
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!newpost){
            throw Apperror("Post not found",400);
        }
        res.status(200).json(post, { message: "find the post you want.." })
    } catch (error) { console.log(error) }
}

exports.createPost = async (req, res,next) => {
    try {
        const newpost = await new Post(req.body)
        await newpost.save()
        res.status(201).json(newpost, { message: "post created..." })
    } catch (error) { next(error) }
}

exports.updatePost = async (req, res,next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updatedPost){
             throw Apperror("Post not found",400);
        }
        res.status(200).json(updatedPost, { message: "find the post you want.." })
    } catch (error) { next(error) }
}

exports.replacePost = async (req, res) => {
    try {
        const replacePost = await Post.findOneAndReplace(
            { id: req.params.id },
  {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
    commentsData: req.body.commentsData
  },
  { new: true },
{returnDocument: 'after'})
        res.status(200).json(post, { message: "all post replaced.." })
    } catch (error) { console.log(error) }
}

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
         if(!post){
             throw Apperror("Post not find to delete",400);
        }
        res.status(200).json(post, { message: "Post Deleted.." })
    } catch (error) { console.log(error) }
}
///
exports.QuerySelect = async (req, res) => {
    try {
        if (req.query.title) {
            const filteredPosts = await Post.find({title:req.query.title})
            res.status(200).json(filteredPosts, { message: "Filered Posts.." })
        }

    } catch (error) { next(error) }
}

exports.addComment = async(req,res,next)=>{
    try{
        const id = req.params.id
        const post = Post.findById(id)
        const {userId,text} = req.body
        post.commentsData.push({userId,text})
        await post.save()
        res.status(201).json(post)
    }
    catch(error){
        next(error)
    }
}