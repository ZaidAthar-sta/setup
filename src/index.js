import dotenv from 'dotenv';
import connectDB from "./db/connectDB.js";

dotenv.config(
     {
          path:'./env'
     }
)

connectDB();

/*
import express from "express";

const app = express();

(async () => {
     try {
          await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
          app.on("error", (error) => {
               console.log("ERROR:", error);
               throw error;

          })

          app.listen(process.env.PORT, () => {
               console.log(`http://localhost:${process.env.PORT}`);

          })

     } catch (error) {
          console.error(error)
          throw error
     }
})()
     */