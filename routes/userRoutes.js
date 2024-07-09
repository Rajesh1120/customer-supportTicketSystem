const express =require('express');
const router=express.Router();
const { registerUser, loginUser, homeData } = require('../controllers/userControllers');
const authenticationUser =require('../config/validationToken')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/home',authenticationUser,homeData)

module.exports=router;