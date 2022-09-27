const router = require("express").Router();

/* GET home page */

router.use("/coins", require("./list.routes"))
router.use("/auth", require("./auth.routes"))
router.use("/", require("./exchanges.routes"))
router.use("/details", require("./details.routes"))


module.exports = router;
