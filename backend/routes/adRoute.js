const router = require('express').Router()
const {createAd} = require("../controllers/adController")
const {displayAd} = require("../controllers/adController")


router.post("/createAd", createAd)
router.get("/displayAd", displayAd)


module.exports = router;