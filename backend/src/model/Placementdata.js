const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var PlacementSchema = new Schema({
    studName : String,
    admNo : String,
    phone : Number,
    mail : String,
    program : String,
    branch : String,
    company : String,
    title: String,
    ctc : String,
    year : String
    
});

var PlacementData = mongoose.model('placement_status',PlacementSchema);
module.exports = PlacementData;