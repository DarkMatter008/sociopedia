const express = require("express");
const { deleteUser, followUser, getUser, UnFollowUser, updateUser } = require("../Controllers/UserController");

const router = express.Router();

// router.get('/', async(req, res)=>{
//     res.send("user route")
// })

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
module.exports = router;