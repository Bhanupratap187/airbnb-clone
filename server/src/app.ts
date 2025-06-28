import express, { Express } from "express";
import userRoutes from "./api/v1/users/user.route";

const app: Express = express();

// Middleware
app.use(express.json());

// API Routes
app.use("/api/v1/users", userRoutes);

export default app;
