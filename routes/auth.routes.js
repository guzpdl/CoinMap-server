const { createUser, loginUser } = require("../controller/user.controller");

const router = require("express").Router();

// --------------------- POST -----------------

router.post("/signup",  createUser )
router.post("/login",  loginUser )
// router.post("/logout",  loginUser )
// router.post("/edit",  loginUser )



module.exports = router;
