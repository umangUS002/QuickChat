import mongoose from "mongoose";

// Function to connect to mongobd database
export const connectDB = async() => {
    try{
        mongoose.connection.on('connected', ()=> console.log('Databse Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    }catch(error){
        console.log(error);
    }
}