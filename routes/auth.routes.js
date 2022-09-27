const { createUser, loginUser, asd } = require("../controller/user.controller");


const router = require("express").Router();







// --------------------- POST -----------------

    router.post("/signup",  createUser )
    router.post("/login",  loginUser )
    // router.get("/logout",  logout )



module.exports = router;
