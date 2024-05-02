const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const Admin = require("../model/Admin");
const generateToken = require("../utils/generateToken");
const verifyToken = require("../utils/verifyToken");
const { hashPassword, isPassMatched } = require("../utils/helpers");


// @dec Admin register
// @route POST /api/v1/admins/register
// @access Private
exports.registerAdminCtrl = AsyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    
        // check if email exist
        const adminFound = await Admin.findOne({email});
        if(adminFound){
            throw new Error("Admin Exist");
        }
        
        // register
        const user = await Admin.create({
            name,
            email,
            password: await hashPassword(password),
        });
        res.status(201).json({
            status: "Success",
            data: user,
            message: "admin registered successfully",
        });
    
});

// @dec Admin login
// @route POST /api/v1/admins/login
// @access Private
exports.loginAdminCtrl =  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
        // find user
        const user = await Admin.findOne({email});
        if(!user){
            return res.json({message: "User not found"});
        }
        
        //verify password
        const isMatched = await isPassMatched(password, user.password);

        // check if password is matching
        if(!isMatched){
            console.log(password);
            console.log(user.password);
            console.log(isMatched);
            return res.json({message: "Invalid login credentials"});
        } else {
            return res.json({
                data: generateToken(user._id),
                message: "Admin logged in successfully",
        });
        } 
    
});

// @dec Get all Admin
// @route GET /api/v1/admins/
// @access Private
exports.getAdminsCtrl = AsyncHandler (async(req, res) => {  
    const admins = await Admin.find();
    res.status(200).json({
        status: "success",
        message: "Admins fetched successfully",
        data: admins,
    });
}); 

// @dec Get profile/single Admin
// @route GET /api/v1/admins/:id
// @access Private
exports.getAdminProfileCtrl =  AsyncHandler(async(req, res) => {
  
    const admin = await Admin.findById(req.userAuth._id).select(
        "-password -createdAt -updatedAt").populate("courses");
    if(!admin){
        throw new Error("Admin not found");
    } else {
        res.status(200).json({
            status : "success",
            data : admin,
            message : "Admin profile fetched successfully",
        });
    }
}); 

// @dec update Admin
// @route PUT /api/v1/admins/:id
// @access Private
exports.updateAdminCtrl =  AsyncHandler(async(req, res) => {
    const { email, name, password } = req.body;
    
    // if email is taken
    const emailExist = await Admin.findOne({email});
    if(emailExist){
        throw new Error("The email is taken/exist.");
    } 

    // check if user updating password
    if(password){
        // update
        const admin = await Admin.findByIdAndUpdate(req.userAuth._id, {
            email,
            password:await hashPassword(password),
            name,
        },
        {
            new : true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: admin,
            message: "Admin updated successfully",
        });
    }  else {
         // update
         const admin = await Admin.findByIdAndUpdate(req.userAuth._id, {
            email,
            name,
        },
        {
            new : true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: admin,
            message: "Admin updated successfully",
        });
    }
});

// @dec delete Admin
// @route DELETE /api/v1/admins/:id
// @access Private
exports.deleteAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "Success",
            data: "Delete Admin",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

// @dec Suspend a faculty member
// @route PUT /api/v1/admins/suspend/faculty/:id
// @access Private
exports.adminSuspendFacultyCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "Success",
            data: "Admin suspend faculty member",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

// @dec Unuspend a faculty member
// @route PUT /api/v1/admins/unsuspend/faculty/:id
// @access Private
exports.adminUnsuspendFacultyCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "Success",
            data: "Admin unsuspend faculty member",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

// @dec Withdraw a faculty member
// @route PUT /api/v1/admins/withdraw/faculty/:id
// @access Private
exports.adminWithdrawFacultyCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "Success",
            data: "Admin withdraw faculty member",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

// @dec Unwithdraw a faculty member
// @route PUT /api/v1/admins/unwithdraw/faculty/:id
// @access Private
exports.adminUnwithdrawFacultyCtrl =  (req, res) => {
    try {
        res.status(201).json({
            status: "Success",
            data: "Admin unwithdraw faculty member",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};



