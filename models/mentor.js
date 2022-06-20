const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    mentorName:{
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
    experience:{
        type:Number,
        default:0
    },
    student:[{
        type:mongoose.Types.ObjectId,
        ref:"students"
    }]

},{timestamps:true});

const Mentor = mongoose.model('mentors',mentorSchema);

module.exports = Mentor;