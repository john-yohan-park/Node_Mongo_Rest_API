// import
const express = require('express')      // framework
const Post = require('../models/Post'); // db

const router = express.Router()         // create router app
  
// get back all posts
router.get('/', async (req, res) => {
    try {
        const post = await Post.find()  // find() returns all posts
        res.json(post)
    }
    catch(e) {res.json({message:e})}
})

// submit a post
router.post('/', async (req, res) => {
    const post = new Post({             // create Post model
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save() // return promise
        res.json(savedPost)
    }
    catch(e) {res.json({message:e})}
})

// get back specific post
router.get('/:postId', async (req, res) =>{
    try {
        //console.log(req.params.postId)
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(e) {res.json({message:e})}
})

// delete a specific post
router.delete('/:postId', async (req, res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    }
    catch(e) {res.json({message:e})}
    
})

// update a specific post
router.patch('/:postId', async (req, res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}         // update title
        )
        res.json(updatedPost)
    }
    catch(e) {res.json({message:e})}
})


module.exports = router

/*
router.get('/specific', (req, res) => {
    res.send('You are on a SPECIFIC post')
})
*/
