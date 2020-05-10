const config = require('config')
const DB = config.get('URI');
const mongoose = require('mongoose');

mongoose.connect(DB, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false 
},(err,db)=>{
    if(err)console.log(err)
});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
});