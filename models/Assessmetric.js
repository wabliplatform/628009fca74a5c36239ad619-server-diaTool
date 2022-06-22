
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmetricSchema = new Schema({
Underscoreid:String , 


weight:Number , 


bmi:Number , 


waistcirc:Number , 


oximetry:Number , 


proteinintake:Number , 


systolic:Number , 


diastolic:Number , 


grainintake:Number , 


fruitintake:Number , 


vegintake:Number 



})

module.exports = {
  Assessmetric : mongoose.model('assessmetric', assessmetricSchema),
}

