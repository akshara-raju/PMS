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
const Dutydata = require('./src/model/Dutydata');
const Transportdata = require('./src/model/Transportdata');
const AttendanceData = require('./src/model/Attendancedata');
const VerifiedDutyData = require('./src/model/VerifiedLeavedata');
const { count } = require('./src/model/Companydata');
const VerifiedDutydata = require('./src/model/VerifiedLeavedata');

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
// ************display verified duty leave*************
app.get('/leaves',function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    VerifiedDutydata.find()
    .then(function(statuses){
        res.send(statuses);
    });

});



// ******************
// display duty leave
app.get('/dstatus',function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    Dutydata.find()
    .then(function(statuses){
        res.send(statuses);
    });

});



// ******************
// display transportation
app.get('/tstatus',function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    Transportdata.find()
    .then(function(statuses){
        res.send(statuses);
    });

});

// ******************
// display mark attendance
app.get('/getatt',function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    AttendanceData.find()
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


function MailMessagee(x, y, z) {
StudentData.find({ gpa: { $gte: x }, xth : { $gte: y}, 
    xiith : { $gte:z }  }, (error,data)=>{
if(error)
     {
     console.log(error)
     }


     else
     {
    
    //  console.log(data[0].mail)
    //  console.log(data)
      let mailList=[]
      for (let i = 0; i < data.length; i++) {
        mailList.push(data[i].mail)
      }

     
      


      

    const transporter= mailer.createTransport({
        service:'outlook',
        auth: {
            user:'pmssjcet@outlook.com',
            pass: '12345@QWq'
        },
    })
    
    let body= {
       from:'pmssjcet@outlook.com',
       to:mailList,
        subject: 'New notice published! ',
        html: '<h2> Apply Soon. </h2> <p></p>'
    }
    
    // // mail part2
    transporter.sendMail(body,(err,result)=>
    
    {
        if(err){
            console.log(err);
    
            return false;
        }
        console.log("mail sent");
    })

      
      
      




    
      
     }
    })
    
}




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












//*******************add transportation **************
app.post('/addtrans' , function(req, res){
    const trans= new Transportdata({
        admissionNo:req.body.data.admissionNo,
        date:req.body.data.date,
        company:req.body.data.company,
        branch:req.body.data.branch,
        section:req.body.data.section,
        bp:req.body.data.bp,
        sem:req.body.data.sem

    })

    trans.save();
    //MailMessagee();
    console.log('saved')
});






//*******************add duty  **************
app.post('/addduty' , function(req, res){
    const duty= new Dutydata({
        admissionNo:req.body.data.admissionNo,
        date:req.body.data.date,
        stime:req.body.data.stime,
        etime:req.body.data.etime,
        company:req.body.data.company,
        branch:req.body.data.branch,
        section:req.body.data.section,
        sem:req.body.data.sem

    })

    duty.save();
    //MailMessagee();
    console.log('saved')
});

// *********************duty verification**************************

app.post('/verifyleave' , function(req, res){
    const duty= new VerifiedDutyData({
        admissionNo:req.body.data.admissionNo,
        date:req.body.data.date,
        stime:req.body.data.stime,
        etime:req.body.data.etime,
        company:req.body.data.company,
        branch:req.body.data.branch,
        section:req.body.data.section,
        sem:req.body.data.sem

    })

    duty.save();
    //MailMessagee();
    console.log('saved')
});

// **********************after verification*****************
app.delete('/removeduty/:id',(req,res)=>{
    id = req.params.id;
    VerifiedDutydata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
})








//******************* add notice******************
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
    MailMessagee(notice.gpa,notice.xth,notice.xiith);
    console.log("saved notice")
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


// **********************attendance marking**********************

app.post('/markatt' , function(req, res){
    const attlist= new AttendanceData({
        
    admissionNo : req.body.data.AdmissionNumber,
    date : req.body.data.date,
    stime : req.body.data.Starttime,
    etime : req.body.data.Endtime,
    company : req.body.data.company,
    branch : req.body.data.branch,
    section : req.body.data.section,
    sem: req.body.data.sem

    })

    attlist.save();
   // MailMessagee();
    console.log('saved')
});









const port = process.env.PORT | 3000;
app.listen(port, function () {
    console.log("Listening at port " + port);
});