const mongoose = require('mongoose');


const User = mongoose.model('User');



module.exports.register = (req, res, next) => {
    var user = new User();

    //this will catch the values given by client defined in user.model.js
    // user.fullName = req.body.fullName;
    // user.email = req.body.email;
    // user.password = req.body.password;
    // user.save((err, doc) => {  //this will execute after pre event in user.model.js
    //     if (!err)
    //         res.send(doc);
    //     else {
    //         if (err.code == 11000)
    //             res.status(422).send(['Duplicate admission number found.']);
    //         else
    //             return next(err);
    //     }

    // });



    console.log("Test")
}



