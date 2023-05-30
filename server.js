require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const loginLineRoute = require('./routes/loginLine/loginLine.route');
const registerLineRoute = require('./routes/registerLine/registerLine.route');
const course_list = require('./routes/fetch_course/course.route');
const carrier_list = require('./routes/fetch_carrier/carrier.route');

app.use(cors({
    origin:'*'
}));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.get('/',(req,res)=>{
    res.send("Welcome to ots")
})

app.use('/api/v1/userLogin',loginLineRoute);
app.use('/api/v1/registerations',registerLineRoute);
app.use('/api/v1/courses',course_list);
app.use('/api/v1/carrier',carrier_list);

let port=process.env.Port || 4000;
app.listen(port);
console.log("Server is Running at port : ",port);