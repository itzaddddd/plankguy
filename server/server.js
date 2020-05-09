const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('config');
const methodOverride = require('method-override')

/*set constraint*/
const PORT = config.get('PORT');
/* create database connection */
require('./config/mongoose')

const diaryRoute = require('./routes/diaryRoute')
const userRoute = require('./routes/ีuserRoute')

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'))

/* set route */
app.route('/').get((req,res)=>{
  res.send("Plank Guy");
});

app.use('/diary',diaryRoute)
app.use('/user',userRoute)

app.listen(PORT,()=>{
  console.log("Server is running on Port: " + PORT);
});

module.exports = app;
