import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/', router)

export default app;