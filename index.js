
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { connectDB } from "./config/db.js"
import interviewRouter from "./routes/interview.route.js"


dotenv.config()



const app = express()


app.use(express.json())



const port = process.env.PORT || 5003

app.get("/", (req, res) => {
    res.send("hello from interview-service")
})


app.use("/", interviewRouter)


app.listen(port, () => {
    console.log(`interview started on ${port}`);
    
    connectDB()
})
