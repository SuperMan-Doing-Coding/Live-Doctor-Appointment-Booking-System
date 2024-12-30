//api for adding doctors
import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'
const addDoctor = async(req, res)=>{
    try {
        const {name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // cheking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
             return res.json({success:false, message:"Missing some details"})
        }

        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"We request you to please enter a valid Email"})
        }

        // validating string password
        if(password.length<8){
            return res.json({success:false, message:"Ediot enter a strong passowrd!!"})
        }

        // hasing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        


        // creating a doctor data
        const doctorData  = {
            name, 
            email, 
            password:hashedPassword,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            speciality
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({success:true, message: "Congratulations new Doctor added successfully !"})
    } catch (error) {
            console.log(error)
            res.json({success:false, message: error.message})
        
    }
}

// apis for admin login
const loginAdmin = async(req, res)=>{
    try {
        const {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message: "You think i am stupid !! (Joks on you)"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message})
    }
}



export {addDoctor, loginAdmin}