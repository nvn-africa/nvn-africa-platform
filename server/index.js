import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnect } from "./db/db.js";
import authRoutes from './routes/Auth.routes.js'
import userRoutes from './routes/User.routes.js'
import projectRoutes from './routes/Project.routes.js'


dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(cookieParser());


app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/project', projectRoutes)

app.listen(PORT, () => {
    dbConnect()
    console.log(`Server running on port: ${PORT}`)
})