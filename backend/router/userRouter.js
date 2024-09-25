// import express from "express";
// import {
//   addNewAdmin,
//   addNewDoctor,
//   getAllDoctors,
//   getUserDetails,
//   login,
//   logoutAdmin,
//   logoutPatient,
//   patientRegister,
//   doctorLogin
// } from "../controller/userController.js";
// import {
//   isAdminAuthenticated,
//   isPatientAuthenticated,
// } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/patient/register", patientRegister);
// router.post("/login", login);
// router.post('/doctor/login', doctorLogin);
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.post("/doctor/addnew", addNewDoctor);
// router.get("/doctors", getAllDoctors);
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// export default router;


// router/userRouter.js

import express from 'express';
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
  doctorLogin,
} from '../controller/userController.js';
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from '../middlewares/auth.js';

const router = express.Router();

router.post('/patient/register', patientRegister);
router.post('/login', login);
router.post('/doctor/login', doctorLogin);
router.post('/admin/addnew', isAdminAuthenticated, addNewAdmin);
router.post('/doctor/addnew', addNewDoctor);
router.get('/doctors', getAllDoctors);
router.get('/patient/me', isPatientAuthenticated, getUserDetails);
router.get('/admin/me', isAdminAuthenticated, getUserDetails);
router.get('/patient/logout', isPatientAuthenticated, logoutPatient);
router.get('/admin/logout', isAdminAuthenticated, logoutAdmin);

export default router;
