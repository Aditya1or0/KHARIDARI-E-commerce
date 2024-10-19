import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Load environment variables
dotenv.config();

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();
connectCloudinary();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://kharidari-frontend.vercel.app/", // Your Vercel domain
  "https://kharidari-admin.vercel.app/",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // If you need to support credentials (cookies, authorization headers)
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional, if you have public assets)
app.use(express.static(path.join(process.cwd(), "public"))); // Adjust as needed

// Favicon route to prevent 404 error
app.get("/favicon.ico", (req, res) => res.status(204));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Other API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
