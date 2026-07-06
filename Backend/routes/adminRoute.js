import express from "express";
import {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
} from "../Controllers/adminController.js";
import authAdmin from "../Middlewares/authAdmin.js";
import upload from "../Middlewares/multer.js";
import { changeAvailability } from "../Controllers/doctorController.js";

const adminRouter = express.Router();

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.post("/login", loginAdmin);

/**
 * @swagger
 * /api/admin/add-doctor:
 *   post:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               password: { type: string }
 *               speciality: { type: string }
 *               degree: { type: string }
 *               experience: { type: string }
 *               about: { type: string }
 *               fees: { type: number }
 *               address: { type: string }
 *               image: { type: string, format: binary }
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

/**
 * @swagger
 * /api/admin/all-doctors:
 *   get:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.get("/all-doctors", authAdmin, allDoctors);

/**
 * @swagger
 * /api/admin/change-availability:
 *   post:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               docId: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.post("/change-availability", authAdmin, changeAvailability);

/**
 * @swagger
 * /api/admin/appointments:
 *   get:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);

/**
 * @swagger
 * /api/admin/cancel-appointment:
 *   post:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               appointmentId: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     tags: [Admin]
 *     security:
 *       - adminAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
adminRouter.get("/dashboard", authAdmin, adminDashboard);

export default adminRouter;
