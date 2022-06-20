const router = require('express').Router();
const Mentor = require('../models/mentor');
const Student = require('../models/student');



router.get('/',(req,res)=>{
    res.json('Mentor Router is Working');
});

router.post('/create',async(req,res)=>{
    try {
        const user = await Mentor({
            mentorName:req.body.mentorName,
            age:req.body.age,
            address:req.body.address,
            contact:req.body.contact,
            experience:req.body.experience
        })
        const data = await user.save();
        res.json(data);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view',async(req,res)=>{
    try {
        const user = await Mentor.find({});
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.get('/view/:id',async(req,res)=>{
    try {
        const user = await Mentor.find({_id:req.params.id},{"mentorName":"Samsutheen"}).populate("student","studentName -_id");
        res.json(user);
    } catch (error) {
        res.json({msg:error.message});
    }
});




router.put('/update/:id',async(req,res)=>{
    try {
        const user = await Student.findOneAndUpdate(
            {_id:req.params.id},
            {
                $addToSet:{mentor:req.body.mentorId}
            },
            {new:true});
        if(user){
            res.json(user);
        }
        else{
            res.json({msg:error.message});
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});

router.delete('/delete/:id',async(req,res)=>{
    try {
        const user = await Mentor.findByIdAndDelete({_id:req.params.id});
        if(user){
            res.json({msg:"Mentor data is Deleted"});
        }
        else{
            res.json({msg:"User Data is Not founded"});
        }
    } catch (error) {
        res.json({msg:error.message});
    }
});




module.exports = router;

