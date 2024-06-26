const express  = require('express');
const morgan = require('morgan');
const {globalErrHandler, notFoundErr,} = require('../middlewares/globalErrHandler');
const adminRouter = require('../routes/adminRouter');


//const notFoundErr = require('../middlewares/globalErrHandler');

const app = express();

const cors = require('cors');
app.use(cors({origin:"https://nasa-react-app-af.netlify.app"}));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());  // pass incoming JSON data 

// Routes

// Admin 
app.use("/api/v1/admins", adminRouter);

//commet
//new 

// Error handelling middleware
app.use(notFoundErr)
app.use(globalErrHandler);

module.exports = app;