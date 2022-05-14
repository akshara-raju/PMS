const express = require('express');



// const jwt = require('jsonwebtoken');

const CompanyData = require('./src/model/Companydata');


const cors = require('cors');
var bodyparser=require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// *************************************************************
app.get('/notices', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    CompanyData.find()
    .then(function(notices){
        res.send(notices);
    });
});
// *****************************************************************
// add notice
app.post('/addnotice' , function(req, res){
    const notice= new CompanyData({
        company:req.body.data.company,
        title:req.body.data.title,
        disc:req.body.data.disc,
        xth:req.body.data.xth,
        xiith:req.body.data.xiith,
        gpa:req.body.data.gpa,
        qualification:req.body.data.qual,
        deadline:req.body.data.deadline,
        ctc:req.body.data.ctc,
        link:req.body.data.link

    })
    notice.save();

    console.log('saved')
});


// *****updating notice****
app.put('/updatenotice',(req,res)=>{
    // console.log(req.body._id);
    console.log(req.body);
    
    id=req.body._id,
    company=req.body.company,
    title=req.body.title,
    disc=req.body.disc,
    xth=req.body.xth,
    xiith=req.body.xiith,
    gpa=req.body.gpa,
    qualification=req.body.qual,
    deadline=req.body.deadline,
    ctc=req.body.ctc,
    link=req.body.link
    CompanyData.findByIdAndUpdate({"_id":id},
        {$set:{
    "company":company,
"title":title,
"disc":disc,
"xth":xth,
"xiith":xiith,
"gpa":gpa,
"qualification":qualification,
"deadline":deadline,
"ctc":ctc,
"link":link
}})
.then(function(){
    res.send();
})

})

const port = process.env.PORT | 3000;
app.listen(port, function () {
    console.log("Listening at " + port);
});