const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./User')
const DailyDiary = require('./DailyDiary')
const DailyDiarySchema = mongoose.model('DailyDiary').schema
const Comment = require('./Comment')
const CommentSchema = mongoose.model('Comment').schema

let Diary = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    diary_days_number: {
        type: Number,
        default: 14
    },
    diary_set: {
        type: [DailyDiarySchema]
    },
    diary_create: {
        type: Date,
        default: Date.now()
    },
    comment:{
        type: [CommentSchema]
    } 
})
module.exports = mongoose.model('Diary',Diary)