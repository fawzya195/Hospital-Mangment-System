import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
} from "../Controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
userRouter.post("/register", registerUser);

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags: [User]
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
userRouter.post("/login", loginUser);

/**
 * @swagger
 * /api/user/get-profile:
 *   get:
 *     tags: [User]
 *     security:
 *       - userAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
userRouter.get("/get-profile", authUser, getProfile);

/**
 * @swagger
 * /api/user/update-profile:
 *   post:
 *     tags: [User]
 *     security:
 *       - userAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               phone: { type: string }
 *               address: { type: string }
 *               dob: { type: string }
 *               gender: { type: string }
 *               image: { type: string, format: binary }
 *     responses:
 *       200:
 *         description: OK
 */
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile,
);

/**
 * @swagger
 * /api/user/book-appointment:
 *   post:
 *     tags: [User]
 *     security:
 *       - userAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               docId: { type: string }
 *               slotDate: { type: string }
 *               slotTime: { type: string }
 *     responses:
 *       200:
 *         description: OK
 */
userRouter.post("/book-appointment", authUser, bookAppointment);

/**
 * @swagger
 * /api/user/appointments:
 *   get:
 *     tags: [User]
 *     security:
 *       - userAuth: []
 *     responses:
 *       200:
 *         description: OK
 */
userRouter.get("/appointments", authUser, listAppointment);

/**
 * @swagger
 * /api/user/cancel-appointment:
 *   post:
 *     tags: [User]
 *     security:
 *       - userAuth: []
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
userRouter.post("/cancel-appointment", authUser, cancelAppointment);

export default userRouter;
