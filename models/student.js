const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        required:true
    },
    mentor:[{
        type:mongoose.Types.ObjectId,
        ref:"mentors"
    }]

},{timestamps:true});

const Student = mongoose.model('students',studentSchema);

module.exports = Student;