const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};
exports.checkBody=(req,res,next)=>{
if(!req.body.name || !req.body.price){
    return res.status(400).json({
        status: 'fail',
      message: 'Missing name or price.',
    })
    next();
}
}
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

//url
//here id is a variable
//req.params has all the parameters
//if you want to make parameter optional put Question mark with it
exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  //array.find(fun());
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour: tour,
    },
  });
};

exports.createTour = (req, res) => {
  //console.log(req.body);
  //getting the id of last object and incementing 1 in it
  const newId = tours[tours.length - 1].id + 1;
  //merging two objects and creating new object
  const newTour = Object.assign({ id: newId }, req.body);
  //pushing new tour
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      //201 stands for created
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  //res 204 means no data is sending back
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
