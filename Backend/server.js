import http from "http";
import app from "./app.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});