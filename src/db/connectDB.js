import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
     try {
          const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
          console.log(`\n MONGDB connected !! DB HOST ${connectionInstance.connection.host}`);


     } catch (error) {
          console.log("MONGODB CONNECTION FAILED", error);
          throw error;

     }
}

export default connectDB;