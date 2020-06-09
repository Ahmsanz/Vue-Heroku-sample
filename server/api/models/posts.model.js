const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    createdAt: {
        type: String
    },
    mainPic: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    tags: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('post', postSchema);