const userRoute = require('express').Router()
const User = require('../models/User')
const Diary = require('../models/Diary')
// get all users
userRoute.route('/').get((req,res)=>{
    User.find((err,users)=>{
        if(err)console.log(err)
        res.status(200).json(users)
    })
    console.log('Get all users')
})

// register
userRoute.route('/register').post((req,res)=>{
    let { username } = req.body
    console.log('username ',username)
    User.findOne({username:username},(err,user)=>{
        if(err)console.log(err)
        if(user)return res.status(400).json({msg:'มีผู้ใช้นี้อยู่แล้ว'})
        let newUser = new User({
            username: username
        })
        newUser.save((err,user)=>{
            if(err)console.log(err)
            res.status(200).json(user)
        })
    })
    console.log('Add a user')
})

// get user by id
userRoute.route('/:id').get((req,res)=>{
    let user_id = req.params.id
    User.findById(user_id,(err,user)=>{
        if(err)console.log(err)
        res.status(200).json(user)
    })

    console.log('Get user by id')
})

// edit user profile
userRoute.route('/:id/edit').put((req,res)=>{
    let user_id = req.body.id
    let {username} = req.body
    User.findOne({username: username},(err,user)=>{
        if(err)console.log(err)
        if(user && (user.username !== req.body.username))return res.status(400).json({msg: 'ชื่อผู้ใช้นี้ถูกใช้งานแล้ว'});
        User.findByIdAndUpdate(user_id,{
            $set:{
                username: username
            }
        },{new:true},(err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.status(200).json(result);
            }
        });
    })
    console.log('Edit profile');
});

// favourite diary route
// get fav diary
// --tested
userRoute.route('/:id/fav').get((req,res)=>{
    let user_id = req.params.id
    User.findById(user_id,(err,user)=>{
        if(err)console.log(err)
        res.status(200).json(user.fav_diary)
    })

    console.log('Get favourite diary')
})
// add diary
// --tested
userRoute.route('/:id/fav').put((req,res)=>{
    let user_id = req.params.id
    let {diary_id} = req.body
     // find diary by diary id
    Diary.findById(diary_id,(err,diary)=>{
        if(err)console.log(err)
        //find user and update review to user's read later
        User.findByIdAndUpdate(
            user_id,
            {$push:{
                fav_diary: diary
            }},
            {new:true},(err,user)=>{
                if(err)console.log(err)
                console.log('user fav diary ',user.fav_diary)
                res.status(200).json(user.fav_diary)
        })
    })
    console.log('Add a favourite diary')
})
// delete favourite diary
// --tested
userRoute.route('/:id/fav').delete((req,res)=>{
    let user_id = req.params.id
    let {diary_id} = req.body
    Diary.findById(diary_id,(err,diary)=>{
        if(err)console.log(err)
        //find user and update review to user's read later
        User.findByIdAndUpdate(
            user_id,
            {$pull:{
                fav_diary: {_id:diary._id}
            }},
            {new:true}
        ,(err,user)=>{
            if(err)console.log(err)
            console.log('user readlater',user.fav_diary)
            res.json(user.fav_diary)
        })
    })
    console.log('Delete a favourite diary')
})

module.exports = userRoute