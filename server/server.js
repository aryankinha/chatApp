import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js" 


dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use("/auth",authRoutes)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})