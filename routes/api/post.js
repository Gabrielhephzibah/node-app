const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const Post = require('../../models/Post');

router.get('/test',(req, res) => res.json({msg:`Post Works`}));

router.post('/',(req, res)=>{
    console.log(req.body)


    const newPost = new Post ({
       title: req.body.title,
       content: req.body.content,
       tags: req.body.tags
    })

    newPost.save().then(post =>res.json(post));

})

router.delete('/:id', (req, res) => {
    
            Post.findById(req.params.id)
            .then(post => {
                post.remove().then(() => res.json({success: true}));
            })
            .catch(err => res.status(404).json({postnotfound: "post not found"}));
        
})

router.get('/', (req, res) => {
    Post.find()
    .sort({data: -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({
        nopostfound: 'no posts found'
    }))
})


module.exports = router;