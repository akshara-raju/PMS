const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
    studName : String,
    admNo : String,
    phone : Number,
    mail : String,
    program : String,
    branch : String,
    xth : Number,
    xiith: Number,
    gpa : Number,


    
});

var StudentData = mongoose.model('studentdata',StudentSchema);
module.exports = StudentData;