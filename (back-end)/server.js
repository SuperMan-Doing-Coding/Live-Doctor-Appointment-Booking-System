import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
// app configration
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary( )

// middlewares
app.use(express.json())
app.use(cors()) //allow front-end to connect with backend


// api endpoint
app.use('/api/admin', adminRouter)
// localhost:4000/api/admin/add-doctor


app.get('/', (req, res)=>{
    res.send("APIs working ! Good Job. ")
})

app.listen(port, ()=> console.log("Server has started", port))
