require('./config/config');

//require('./config/passportConfig');


require('./models/db');



require('dotenv').config();


// const rtsIndex = require('./routes/index.router');
const rtsIndex = require('./routes/index.router');

const mailer = require("nodemailer");

const express = require('express');

const cors = require('cors');

const bodyparser=require('body-parser');

const passport = require('passport');

// const jwt = require('jsonwebtoken');

const CompanyData = require('./src/model/Companydata');
const PlacementData = require('./src/model/Placementdata');
const StudentData = require('./src/model/Student');
const Companydata = require('./src/model/Companydata');
// const RegDetail =  require('./models/db');



const app = express();

//configuring middleware
app.use(cors());//for communication between ports of frontend and backend
app.use(bodyparser.json());// for passing json data
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());



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

app.get('/student', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    StudentData.find()
    .then(function(student){
        res.send(student);
    });
})


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








//---------------------------------------------------------
// login
// app.get('/reg',function(req,res){
//     res.header("Access-Control-Allow-orgin","*")
//     res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
//     RegDetail.find()
//     .then(function(details){
//         res.send(details);
//     });

// });


// app.get('/reg', function(req, res) {
//     // use mongoose to get all students in the database
//     RegDetail.find(function(err, students) {
//        // if there is an error retrieving, send the error.
//        // nothing after res.send(err) will execute
//        if (err)
//           res.send(err);
//        res.json(details); // return all students in JSON format
//     });
//  });









// *****************************************************************
//mail
function MailMessagee()

{
const transporter= mailer.createTransport({
    service:'outlook',
    auth: {
        user:'pmssjcet@outlook.com',
        pass: '12345@QWq'
    },
})

let body= {
   from:'pmssjcet@outlook.com',
   to:['theerthasn3@gmail.com','akshraa0002@gmail.com','donaarackal111@gmail.com'],
    subject: 'New notice published! ',
    html: '<h2> Apply Soon. </h2> <p></p>'
}

// // mail part2
transporter.sendMail(body,(err,result)=>

{
    if(err){
        console.log("fail");

        return false;
    }
    console.log("success");
})


// // //mail
// app.get('/maill',function(req,res)
// {

    
//   transporter.sendMail(body,(err,result)=>

// {
//     if(err){
//         console.log(err);

//         return false;
//     }
//     console.log(result);
// })

// }
// );

};


//----------------------------------------------------------------------

app.route('/not/:id').get((req,res)=>{
    const id = req.params.id;
    console.log(id)
    Companydata.findOne({"_id":id})
    .then((notice)=>{
        res.send(notice);
    });
})

app.route('/:id').get((req,res)=>{
    const id = req.params.id;
    PlacementData.findOne({"_id":id})
    .then((status)=>{
        res.send(status);
    });
})













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
    MailMessagee();
    console.log('saved')
});





// *****updating notice****
// app.put('/upnotice',(req,res)=>{
//     // console.log(req.body._id);
//     id = req.body.data._id;

//     console.log(id);

    
//     CompanyData.findByIdAndUpdate({"_id":id},
//         {$set:{
//     "company":req.body.data.company,
// "title":req.body.data.title,
// "disc":req.body.data.disc,
// "xth":req.body.data.xth,
// "xiith":req.body.data.xiith,
// "gpa":req.body.data.gpa,
// "qualification":req.body.data.qualification,
// "deadline":req.body.data.deadline,
// "ctc":req.body.data.ctc,
// "link":req.body.data.link
// }})
// .then(function(){
//     res.send();
// })

// })

app.put('/noticeupdate',(req,res)=>{
    // console.log(req.body._id);
    id = req.body._id;

    console.log(id);
   

    
    CompanyData.findByIdAndUpdate({"_id":id},
        {$set:{
    "company":req.body.company,
"title":req.body.title,
"disc":req.body.disc,
"xth":req.body.xth,
"xiith":req.body.xiith,
"gpa":req.body.gpa,
"qualification":req.body.qual,
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
app.put('/update',(req,res)=>{
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
//     service:'gm',
//     auth: {outlook
//         user:process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS
//     },
// })

// let body= {
//    from:'pmssjcet@outlook.com',
 //   to:{donaarackal111@gmail.com','akshraa0002@gmail.com'}
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