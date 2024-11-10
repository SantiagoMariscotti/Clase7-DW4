import { Post } from "../models/post"
export const getPosts = async (req,res) =>{
    const getPosts = await postPost.find()
    res.json(getPosts)
    }