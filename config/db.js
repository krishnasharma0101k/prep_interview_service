import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces use of Google DNS

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected DB");
        
    } catch (error) {
        console.log("MongoDb error", error);
    }
}