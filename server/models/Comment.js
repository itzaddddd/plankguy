const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Diary = require('./Diary')
let Comment = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    diary_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    },
    comment_content: {
        type: String
    },
    commnet_date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Comment',Comment)