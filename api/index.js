import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import groceryRoute from './routes/grocery.js'
import cors from 'cors'
// import cors from 'cors' // i use at night
//In express server we have to write ".js" estension at line no 5 

const app = express();
dotenv.config()
app.use(cors())

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (err) {
      throw err;
    }
  };
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  
  //middleware
  // app.use(cors()) // i wse at night
  app.use(express.json())

  // api calls
  app.use("/auth",authRoute)
  app.use("/grocery/add",groceryRoute)
  app.use("/grocery/updatePurchaseStatus",groceryRoute)
  app.use("/grocery/deleteGroceryItem",groceryRoute)
  app.use("/grocery/get",groceryRoute)
  app.use("/grocery/getAll",groceryRoute)



// app.get("/user",(req,res)=>{
//     res.send("Hello this is my first request")
// })


app.listen(5000, () => {
    connect()
    console.log("Connected to backend.");
})