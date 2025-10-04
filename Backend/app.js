const dotenv = require('dotenv');
dotenv.config()
const express = require("express")
const cors = require('cors');
const cookieParser = require("cookie-parser")
const app = express();
const connectDB = require('./db/db');

connectDB();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("Hello world");
})

module.exports = app;