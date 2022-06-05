require('./config/config');
require('./models/db');

require('dotenv').config();


// const rtsIndex = require('./routes/index.router');
const rtsIndex = require('./routes/index.router');

const mailer = require("nodemailer");

const express = require('express');

const cors = require('cors');

const bodyparser=require('body-parser');

// const jwt = require('jsonwebtoken');

const CompanyData = require('./src/model/Companydata');
const PlacementData = require('./src/model/Placementdata');



const app = express();

//configuring middleware
app.use(cors());//for communication between ports of frontend and backend
app.use(bodyparser.json());// for passing json data
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());



app.use('/api', rtsIndex);
// api/register handled by index.roter.js




// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});






// *************************************************************
app.get('/notices', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    CompanyData.find()
    .then(function(notices){
        res.send(notices);
    });
});


// ******************
// display status
app.get('/status',function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    PlacementData.find()
    .then(function(statuses){
        res.send(statuses);
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
app.put('/noticeupdate/:id',(req,res)=>{
    // console.log(req.body._id);
    id = req.params.id;

    console.log(id);

    
    CompanyData.findByIdAndUpdate({"_id":id},
        {$set:{
    "company":req.body.company,
"title":req.body.title,
"disc":req.body.disc,
"xth":req.body.xth,
"xiith":req.body.xiith,
"gpa":req.body.gpa,
"qualification":req.body.qualification,
"deadline":req.body.deadline,
"ctc":req.body.ctc,
"link":req.body.link
}})
.then(function(){
    res.send();
})

})



// *************Delete notice******************
app.delete('/remove/:id',(req,res)=>{
    id = req.params.id;
    CompanyData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
})


// ******************update student status***********8
app.put('/updateplaceddetails',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    studName=req.body.studName,
    admNo=req.body.admNo,
    phone=req.body.phone,
    mail=req.body.mail,
    program=req.body.program,
    branch=req.body.branch,
    company=req.body.company,
    title=req.body.title,
    ctc=req.body.ctc

    PlacementData.findByIdAndUpdate({"_id":id},
    {$set:{"studName":studName,
"admNo":admNo,
"phone":phone,
"mail":mail,
"program":program,
"branch":branch,
"company":company,
"title":title,
"ctc":ctc
}})
.then(function(){
    res.send();
})
})


//mail


// const transporter= mailer.createTransport({
//     service:'gmail',
//     auth: {
//         user:process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS
//     },
// })

// let body= {
//     from: 'pmssjcet@gmail.com',
//     to: 'akshraa0002@gmail.com',
//     subject: "New notice published! ",
//     html: '<h2> Apply Soon. </h2> <p></p>'
// }
// transporter.sendMail(body,(err,result)=>

// {
//     if(err){
//         console.log(err);

//         return false;
//     }
//     console.log(result);
// })










const port = process.env.PORT | 3000;
app.listen(port, function () {
    console.log("Listening at port " + port);
});