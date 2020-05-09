const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./User')
const Diary = require('./Diary')
let DailyDiary = new Schema({
    diary_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Diary'
    },
    diary_day: {
        type: Number,
        default: 1
    },
    diary_content: {
        type: String
    },
    diary_image: {
        type: String
    },
    diary_create: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('DailyDiary',DailyDiary)