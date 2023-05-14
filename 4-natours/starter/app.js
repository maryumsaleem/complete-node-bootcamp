
const express = require('express');
const app = express();
const morgan = require('morgan');


const tourRouter=require('./routes/tourRoutes');
const userRouter=require('./routes/userRoutes');
//import rou

//---------- ------     1- MIDDLEWARES  ---------------------
console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'));
}

//here express.json is a middelware
app.use(express.json());

//creating our own middleware
app.use((req, res, next) => {
  console.log('hello from the middleware.');
  next();
});

//2nd our own global middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//MIDDLEWARE FOR STATIC FILES 

app.use(express.static(`${__dirname}/public`));

//----------------     2- ROUTE HANDLERS  ---------------------


// // ----------------- 3-ROUTES --------------------
// const tourRouter = express.Router();
// const userRouter = express.Router();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports=app;
