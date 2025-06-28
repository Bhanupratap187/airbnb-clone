import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

// Load environment variables6 dotenv.config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Only start the server if this file is run directly
// This prevents the server from starting when imported by our tests
if (require.main === module) {
  startServer();
}
