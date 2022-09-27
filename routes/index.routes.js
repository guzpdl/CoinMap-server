const router = require("express").Router();
const validateToken = require('../middleware/validateToken.middleware');


/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use('/auth',  require('./auth.routes'))
router.use('/user', validateToken, require('./user.routes'))






module.exports = router;
