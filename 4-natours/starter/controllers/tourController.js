
const Tour = require('.././models/tourModel.js');
const fs = require('fs');

exports.getAllTours = async (req, res) => {
  try {
    const queryObject ={...req.query};
    const excludedFields=['page','sort','limit','fields'];
    excludedFields.forEach(el =>delete queryObject[el]);
    console.log(req.query);
    const query = Tour.find(queryObject);
   // const tours = await Tour.find().where('duration').equals(5).where('difficulty').equals('easy');
   //execute query
   const tours=await query;
   
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  }
  catch (err) {
    res.status(404).json({
      status: "failed",
      message: err
    })
  }
}


exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: tour
    });
  }
  catch (err) {
    res.status(404).json({
      status: "failed",
      message: err
    })
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      }
    });
  }
  catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};
exports.createJsonTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      }
    });
  }
  catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
  }
};

exports.updateTour = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const tour = await Tour.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      status: 'success',
      data: {
        tour
      },
    });
  }

  catch (err) {
    res.status(404).json({
      status: "failed",
      message: err
    });
  }
};

exports.deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  }
  catch (err) {
    res.status(404).json({
      status: "failed",
      message: err
    })
  }
  //res 204 means no data is sending back

};