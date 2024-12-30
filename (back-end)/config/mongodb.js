import mongoose, { Mongoose } from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log("Backend is connected !"))
    await mongoose.connect(`${process.env.MONGODB_URI}/Madicare`)
}

export default connectDB;