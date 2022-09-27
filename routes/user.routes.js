const { getUser } = require('../controller/getUser.controller');

const router = require('express').Router();

router.get('/profile', getUser)


module.exports = router;