const { getUser, editUser } = require('../controller/getUser.controller');

const router = require('express').Router();


// ------------- GET ------------

router.get('/profile', getUser)

// --------------- PUT -------------

router.put('/profile/:id', editUser) 


module.exports = router;