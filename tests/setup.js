import dotenv from "dotenv";
import app from "../src/app.js";

// Load test environment variables
dotenv.config({ path: ".env.test" });

export default app;