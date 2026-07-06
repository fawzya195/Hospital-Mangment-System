import express from "express";
import {
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
} from "../Controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

/**
 * @swagger
 * /api/doctor/list:
 *   get:
 *     tags: [Doctor]
 *     responses:
 *       200:
 *         description: OK
 */
doctorRouter.get("/list", doctorList);

/**
 * @swagger
 * /api/doctor/login:
 *   post:
 *     tags: [Doctor]
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
doctorRouter.post("/login", loginDoctor);

/**
 * @swagger
 * /api/doctor/appointments:
 *   get:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);

/**
 * @swagger
 * /api/doctor/complete-appointment:
 *   post:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
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
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);

/**
 * @swagger
 * /api/doctor/cancel-appointment:
 *   post:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
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
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);

/**
 * @swagger
 * /api/doctor/dashboard:
 *   get:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);

/**
 * @swagger
 * /api/doctor/profile:
 *   get:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
doctorRouter.get("/profile", authDoctor, doctorProfile);

/**
 * @swagger
 * /api/doctor/update-profile:
 *   post:
 *     tags: [Doctor]
 *     security:
 *       - doctorAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fees: { type: number }
 *               address: { type: object }
 *               available: { type: boolean }
 *     responses:
 *       200:
 *         description: OK
 */
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;
