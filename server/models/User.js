const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const DiarySchema = require('./Diary').schema

let User = new Schema({
    username: {
        type: String,
        required: true
    },
    user_join: {
        type: Date,
        default: Date.now()
    },
    diary_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary',
        default: null
    },
    fav_diary: {
        type: [DiarySchema]
    }
})

module.exports = mongoose.model('User',User)