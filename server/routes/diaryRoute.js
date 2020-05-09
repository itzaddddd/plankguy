const diaryRoute = require('express').Router()
const Diary = require('../models/Diary')
const DailyDiary = require('../models/DailyDiary')
const User = require('../models/User')

// --tested
// @route   GET /diary
// @desc    Get all diaries 
// @access  Public
diaryRoute.route('/').get((req,res)=>{
    Diary.find({},(err,diaries)=>{
        if(err)console.log(err)
        res.send(diaries)
    })
    console.log('Get Timeline')
})
// --tested
// @route   POST /diary/:id
// @desc    Create a diary
// @access  Public
diaryRoute.route('/').post((req,res)=>{
    let {user_id, diary_days_number} = req.body
    let newDiary = new Diary({
        user_id: user_id,
        diary_days_number: diary_days_number
    })
    newDiary.save((err,diary)=>{
        if(err)console.log(err)
        // update diary id to user data
        User.findByIdAndUpdate(user_id,{
            $set:{diary_id:diary._id}
        },(err,user)=>{
            if(err)console.log(err)
            console.log(user)
            res.status(200).json(diary)
        })
    })
    console.log('Create a diary')
})
// --tested
// @route   GET /diary/:id
// @desc    Get a diary by id 
// @access  Public
diaryRoute.route('/:id').get((req,res)=>{
    let diary_id = req.params.id
    console.log(diary_id)
    Diary.findById(diary_id,(err,diary)=>{
        if(err)console.log(err)
        res.status(200).json(diary)
    })
    console.log('Get a diary')
})
// --tested
// @route   GET /diary/:id/daily?day=day
// @desc    Get a daily diary by id and day of diary
// @access  Public
diaryRoute.route('/:id/daily').get((req,res)=>{
    let diary_day = req.query.day
    let diary_id = req.params.id
    DailyDiary.findOne({
        diary_id: diary_id,
        diary_day: diary_day
    },(err,dailydiary)=>{
        if(err)console.log(err)
        res.status(200).json(dailydiary)
    })
    console.log('Get a daily diary')
})
// --tested
// @route   POST /diary/:id/daily?day=day
// @desc    Create a daily diary by id and day of diary
// @access  Private
diaryRoute.route('/:id/daily').post((req,res)=>{
    let diary_id = req.params.id
    let {diary_day, diary_content, diary_image} = req.body
    let newDailyDiary = new DailyDiary({
        diary_id: diary_id,
        diary_day: diary_day,
        diary_content: diary_content,
        diary_image: diary_image
    })
    newDailyDiary.save((err,dailydiary)=>{
        if(err)console.log(err)
        Diary.findByIdAndUpdate(diary_id,{
            $push:{diary_set:dailydiary}
        },(err,result)=>{
            if(err)console.log(err)
            res.status(200).json(dailydiary)
        })
    })
    console.log('Add a daily diary')
})
// --tested
// @route   PUT /diary/:id/daily
// @desc    Edit a daily diary
// @access  Private
diaryRoute.route('/:id/daily').put((req,res)=>{
    let diary_id = req.params.id
    let {diary_day, diary_content, diary_image} = req.body
    DailyDiary.findOneAndUpdate({diary_id:diary_id,diary_day:diary_day},{
        $set: {
            diary_day: diary_day,
            diary_content: diary_content,
            diary_image: diary_image
        }
    },{new:true},(err,dailydiary)=>{
        if(err)console.log(err)
        Diary.findOneAndUpdate({
            _id:diary_id,
            'diary_set._id':dailydiary._id
        },{
            $set:{
                'diary_set.$':dailydiary
            } 
        },{new:true},(err,diary)=>{
            if(err)console.log(err)
            res.status(200).json(dailydiary)
        })
    })
    console.log('Edit a daily diary')
})
// --tested
// @route   DELETE /diary/:id/daily?day=day
// @desc    Delete a daily
// @access  Private
diaryRoute.route('/:id/daily').delete((req,res)=>{
    let diary_id = req.params.id
    let diary_day = req.query.day
    DailyDiary.findOneAndRemove({diary_id:diary_id,diary_day:diary_day},(err,dailydiary)=>{
        if(err)console.log(err)
        Diary.findOneAndUpdate({_id:diary_id},{
            $pull: {'diary_set':{_id:dailydiary._id}}
        },{new:true},(err,diary)=>{
            if(err)console.log(err)
            res.json(diary)
        })
    });
    console.log('Delete a daily diary')
})

module.exports = diaryRoute