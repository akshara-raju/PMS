const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminone:adminone@kraftsbazardatas.vkggh.mongodb.net/PlacementDatas?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

var TransportSchema = new Schema({
    admissionNo : String,
    date : String,
    company : String,
    branch : String,
    section: String,
    bp : String,
    sem : String
});

var Transportdata = mongoose.model('transport', TransportSchema);

module.exports = Transportdata;