const mongoose =require('mongoose');
const Student = mongoose.model('Student');

const dataList = function (req, res) {

const data=[{title:"Welcome",body:"This is ..."}];
   res.status(200)
.json({"status" : "success"});


 };
const getStudents = function (req, res) {
Students.find()
.then(students =>res.status(200).json(students))
.catch(err=>res.status(500).json({message:'error',error:err}));
};
module.exports = {
  dataList,getStudents
 };
