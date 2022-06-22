/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Assessmetric } = require('../models/Assessmetric');

/**
* Creates the data
*
* assessmetric Assessmetric data to be created
* returns assessmetric
* */
const createassessmetric = ({ assessmetric }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Assessmetric(assessmetric).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* assessmetricId String the Id parameter
* no response value expected for this operation
* */
const deleteassessmetric = ({ assessmetricId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Assessmetric.findOneAndDelete({ _id:assessmetricId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllassessmetric = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Assessmetric.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* assessmetricId String the Id parameter
* returns assessmetric
* */
const getassessmetric = ({ assessmetricId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Assessmetric.findById(assessmetricId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* assessmetricId String the Id parameter
* assessmetric Assessmetric data to be updated (optional)
* returns assessmetric
* */
const updateassessmetric = ({ assessmetricId, assessmetric }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Assessmetric.findOneAndUpdate({ _id:assessmetricId },assessmetric).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createassessmetric,
  deleteassessmetric,
  getAllassessmetric,
  getassessmetric,
  updateassessmetric,
};
