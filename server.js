const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db');
const ApiRouter = require('./routes/index');
const app =express();
const PORT = process.env.PORT || 4000;
connectDb();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',ApiRouter);

app.get('/',(req,res)=>{
    res.json('Api is Working');
});

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
});