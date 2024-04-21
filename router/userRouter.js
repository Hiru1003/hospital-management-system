import express from "express";

const router = express.Router();

router.post("/patient/register", patientRegister);

export default router;