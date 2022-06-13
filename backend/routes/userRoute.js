const router = require('express').Router();

const { register } = require("../controllers/userController")
const { login } = require("../controllers/userController")
const { changePW } = require("../controllers/userController")
const { userAuthentication} =  require("../controllers/userController")
const  { verifyJwt } =  require("../controllers/userController")


router.post("/register", register)
router.post("/login", login)
//router.post("/changePW", changePW )
router.get("/userAuth" , verifyJwt  ,userAuthentication)

module.exports = router;