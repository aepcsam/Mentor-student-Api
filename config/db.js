const mongoose = require('mongoose');
const dotenv = require('dotenv');

const url = process.env.MONGODB_URL;

const connectDb = async()=>{
    try {
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (error) {
        res.json({msg:error.message});
    }
};

module.exports = connectDb;
