const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var DutySchema = new Schema({
    admissionNo : String,
    date : String,
    stime : String,
    etime : String,
    company : String,
    branch : String,
    section : String,
    sem: String
});

var Dutydata = mongoose.model('duty', DutySchema);

module.exports = Dutydata;