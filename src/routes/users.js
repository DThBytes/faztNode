const { application } = require('express');
const express = require('express');
const router = express.Router();

router.get('/users/signin', (req,res)=>{
    res.send('SignIn');
});

router.get('/users/signup',(req,res)=>{
    res.send('SignUp');
});

module.exports = router;