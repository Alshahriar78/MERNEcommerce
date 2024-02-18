// Basic Lib Import
const express=require('express');
const router=require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');
const path= require('path');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');
app.use(express.static('client/build'));

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);

// Mongo DB Database Connection
let URI="mongodb+srv://NSU:nsu5836nsu@cluster0.e1c0wqf.mongodb.net/MernEcommerce";
let OPTION={user:'NSU',pass:'nsu5836nsu',autoIndex:true}

//alshahoriarsaurov37
//  let OPTION={user:'',pass:'',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log(" Database Connection Success");
}).catch((err)=>{
    console.log(err)
})


//managing Back End Routing
app.use("/api/v1", router);

// Managing Front End Routing

app.use(express.static('client/dist/'))
app.get("*",function (req,res){
    req.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})





module.exports = app ;