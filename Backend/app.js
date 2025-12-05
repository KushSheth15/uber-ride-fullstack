const dotenv = require('dotenv');
dotenv.config()
const express = require("express")
const cors = require('cors');
const cookieParser = require("cookie-parser")
const app = express();
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes');

connectDB();

// app.use(cors());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET","POST","PUT","DELETE"]
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;