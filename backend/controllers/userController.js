const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.register =  async (req, res, next) => { 
   
    try {

        const {name, email, password} = req.body;
        const userCheck  = await User.findOne({email})
        if(userCheck) {
           return  res.json({msg: "Email already exists", status: false})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name, email, password:hashedPassword
        })
        delete user.password;
        return res.json({status: true, auth: true, user})
        
    } catch (error) {
        next(error)
        
    }
}
        
    module.exports.verifyJwt = (req, res, next) => {

            const token = req.headers["x-access-token"]

            if(!token) {
                    res.json({ auth: false, msg: "Error, no token found"})
            }
            else {
                jwt.verify(token, "jwtSecret", (error, decoded) => {
                    if(error) {
                            res.json({auth: false, msg: "Failed to authenticate", error: error})
                    }
                    else {
                        req.id = decoded.id;
                        next(); 
                    }
                })
            }
    }
        
    module.exports.userAuthentication = async (req, res, next) => {
        res.json({ auth: true, msg: "Authentication Successful"})

    } 


module.exports.login = async (req, res, next) => { 
            try {
                    const {email, password} = req.body;

                    const userCheck = await User.findOne({email})
                    
                    if(!userCheck) {
                        res.json({auth: false, msg: "Account not found, please register", status: false})
                    }

                    const isPasswordCorrect = await bcrypt.compare(password, userCheck.password)
                    if(!isPasswordCorrect) {
                        res.json({auth: false, msg: "Incorrect Password", status: false})
                    }

                    const id = userCheck._id;
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn: 500  
                    })

                    delete userCheck.password
                    return res.json({status: true, auth: true, token: token, userCheck})
                    
                    


            } catch (error) {
                next(error)
            }

}

// module.exports.changePW = async (req, res, next) => { 
//     try {
//             const {_id, currentPassword, newPassword} = req.body;

//             const userCheck = await User.findOne({_id})
//             if(!userCheck) {
//                 res.json({msg: "Account not found, please register", status: false})
//             }

//             const isPasswordCorrect = await bcrypt.compare(currentPassword, userCheck.password)
//             if(!isPasswordCorrect) {
//                 res.json({msg: "Incorrect Password", status: false})
//             }

//             const hashedPassword = await bcrypt.hash(newPassword, 10)
//             const user = await User.findByIdAndUpdate({_id},{password: hashedPassword})
//             delete userCheck.password
//             return res.json({status: true, user})
            

//     } catch (error) {
//         next(error)
//     }

// }