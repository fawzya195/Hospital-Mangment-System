import express from "express";
import cors from "cors";
import "dotenv/config";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// ---- الاتصال بالداتابيز والـ Cloudinary ----
connectDB();
connectCloudinary();

// ---- Middlewares عامة ----
app.use(express.json());
app.use(cors());

// ---- الـ API Routes ----
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/admin", adminRouter);

// ---- Route تجريبي ----
app.get("/", (req, res) => {
  res.send("API Working ");
});
app.use("/hospital_api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => console.log(`Server Started on port ${port}`));
