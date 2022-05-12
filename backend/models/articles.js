const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'must provide a title'],
        trim: true,
        maxlength: [50, 'title must be 50 characters or less']
    },
    published: {
        type: Boolean,
        default: false
    },
    content: {
        type: String,
        // required: [true, 'please provide content'],
        trim: true,

    }
}); 

module.exports = mongoose.model('Article', ArticleSchema)