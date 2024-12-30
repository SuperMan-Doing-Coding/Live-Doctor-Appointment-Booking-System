import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{
    cloudinary.config(
        {
            cloud_name: process.env.CLOUDENARY_NAME,
            api_key: process.env.CLOUDENARY_API_KEY,
            api_secret: process.env.CLOUDENARY_SECRET_KEY

        }
    )
}

export default connectCloudinary;