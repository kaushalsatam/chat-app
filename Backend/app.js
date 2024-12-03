import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/userRoutes.js";
import db from "./config/db.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// routes
app.use('/', router)

export default app;