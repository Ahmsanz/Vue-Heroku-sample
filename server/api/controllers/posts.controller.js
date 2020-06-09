const Post = require('../models/posts.model')

exports.get = async (req, res) => {
    await Post.find({})
        .then( files => {
            res.status(200).send(files)
        });    
}

exports.create = async (req, res) => {
    const { userId, author, title, mainPic, content, tags } = req.body;

    const newPost = new Post ({
        userId, 
        author,
        title,
        mainPic,
        content,
        tags,
        createdAt: new Date()
    })
    await newPost.save()

        .then( file => {
            console.log('new post created', newPost.title);
            res.send(file);
        })
        .catch( err => {
            console.log('something went wrong creating the post', err);
            res.status(400).json({msg: 'Something went wrong'})
    })
};

exports.delete = async (req, res) => {
    const { postID } = req.params;
    console.log(postID);
    await Post.findByIdAndRemove({_id: postID})
        .then( file => {console.log(file); res.send(file)})
        .catch( err => console.log('something went wrong', err));
}