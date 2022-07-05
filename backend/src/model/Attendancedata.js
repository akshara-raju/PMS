const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var AttendanceSchema = new Schema({
    admissionNo : String,
    date : String,
    stime : String,
    etime : String,
    company : String,
    branch : String,
    section : String,
    sem: String
});

var Attendancedata = mongoose.model('attendance', AttendanceSchema);

module.exports = Attendancedata;