const express = require('express');
// const app = require('../../app/app');
const { registerAdminCtrl, 
    loginAdminCtrl, 
    getAdminsCtrl, 
    getAdminProfileCtrl, 
    updateAdminCtrl, 
    deleteAdminCtrl, 
    adminSuspendFacultyCtrl,
    adminUnsuspendFacultyCtrl,
    adminWithdrawFacultyCtrl,
    adminUnwithdrawFacultyCtrl,
    
 } = require('../controller/adminCtrl');
const isLogin = require('../middlewares/isLogin');


const adminRouter = express.Router();

// We moved the business logic from app.js to adminRouter.js

// Register
adminRouter.post("/register", registerAdminCtrl);

// Login
adminRouter.post("/login", loginAdminCtrl);

// Get all
adminRouter.get("/", isLogin, getAdminsCtrl);



module.exports = adminRouter;