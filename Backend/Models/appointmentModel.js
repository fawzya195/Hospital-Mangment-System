import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  docId: { type: String, required: true },
  slotDate: { type: String, required: true },
  slotTime: { type: String, required: true },
  userData: { type: Object, required: true }, // نسخة من بيانات المريض وقت الحجز
  docData: { type: Object, required: true }, // نسخة من بيانات الدكتور وقت الحجز
  amount: { type: Number, required: true },
  date: { type: Number, required: true }, // timestamp وقت إنشاء الحجز
  cancelled: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
});

const appointmentModel =
  mongoose.models.appointment ||
  mongoose.model("appointment", appointmentSchema);

export default appointmentModel;
