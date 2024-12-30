import jwt from 'jsonwebtoken'
// creating admin authentation middleware
const authAdmin  = async(req, res, next)=>{
    try {
        const {atoken} = req.headers
        if(!atoken) return res.json({success:false, message: "Not authorizrd login again (get lost you fool)"})
            const token_decods = jwt.verify(atoken, process.env.JWT_SECRET)
        if(token_decods != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) return res.json({success:false, message: "Not authorizrd login again (get lost you fool)"})
            next()
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}

export default authAdmin