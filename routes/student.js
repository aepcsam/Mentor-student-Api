const router = require('express').Router();
const Student = require('../models/student');
const Mentor = require('../models/mentor');

router.get('/',(req,res)=>{
    res.json('Student Router is Working');
});

router.post('/create',async(req,res)=>{
    try {
        const user = await Student({
            studentName:req.body.studentName,
            age:req.body.age,
            address:req.body.address,
            contact:req.body.contact
        });
        const data = await user.save();
        res.json(data);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view',async(req,res)=>{
    try {
        const user = await Student.find();
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view/:id',async(req,res)=>{
    try {
        const user = await Student.find({_id:req.params.id}).populate("mentor");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Mentor.findByIdAndUpdate(
            {_id:req.params.id},
            { 
                $addToSet:{student:req.body.studentId}
            },
            {new:true});
        res.json(user);
    } catch (error) {
        res.json({msg:error.mesage});
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {

        const user = await Student.findByIdAndDelete({_id:req.params.id});
        if(user){
            res.json({msg:"Student data is Deleted"});
        }
        else{
            res.json({msg:"User Data is Not founded"});
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});



module.exports = router;

