const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var CompanySchema = new Schema({
    company : String,
    title : String,
    disc : String,
    xth : Number,
    xiith : Number,
    gpa : Number,
    qualification : String,
    deadline: String,
    ctc : String,
    link : String
});

var Companydata = mongoose.model('company', CompanySchema);

module.exports = Companydata;