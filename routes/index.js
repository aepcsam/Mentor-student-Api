const router = require('express').Router();
const MentorRouter = require('./mentor');
const StudentRouter = require('./student');

router.use('/mentor',MentorRouter);
router.use('/student',StudentRouter);

module.exports=router;