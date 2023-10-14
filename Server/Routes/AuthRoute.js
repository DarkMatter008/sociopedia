// const { request, response } = require("express");
const express = require("express");
const { registerUser, loginUser } = require("../Controllers/AuthController");


const router = express.Router();




router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router

// router.get('/signin', async(request, response) => {
//     response.send(' Hello from SignIn Page!!!! ');
    
// })

// router.get('/signup', async(request, response) => {
//     response.send(' Hello from signup page!!!! ');
  
// })





