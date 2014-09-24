/**
 * Created by Moroni on 9/17/2014.
 */
var nodemailer = require('nodemailer');
var secrets = require('../config/secrets.js');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: secrets.emailInfo.user,
        pass: secrets.emailInfo.pass
    }
});


function sendMail(mailOptions, callback) {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            if (typeof callback === 'function')
                callback();
        }
    });
}

exports.sendEmail = sendMail;
