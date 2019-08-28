const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title : {
        type:String
    },

    content : {
        type:String
    },

    tags : {
        type:String
    }
})


module.exports = Post = mongoose.model('post', PostSchema);