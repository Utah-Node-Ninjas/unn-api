/**
 * Created by Moroni on 9/17/2014.
 */
var nodemailer = require('nodemailer');
var secrets = require('../config/secrets.js');
var emailTemplates = require('swig-email-templates');
var path = require('path');
var templateOptions = {
  root: path.join(__dirname, "../templates")
};


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
      if (typeof callback === 'function') {
        callback();
      }
    }
  });
}
exports.sendEmail = sendMail;


exports.landingPage = function (req, res) {

  emailUNN(req.body);

  function emailUNN(body) {
    emailTemplates(templateOptions, function (err, render) {
      render('interestedParty.html', body, function (err, html) {
        if (err) {
          console.log('emailTemplates err', err);
          res.send(500);
        } else {
          var emailOptions = {
            from: 'Utah Node Ninjas <utahnodeninjas@gmail.com>',
            to: 'utahnodeninjas@gmail.com',
            subject: 'Someone Reaching Out',
            html: html
          };
          sendMail(emailOptions);
          res.send(200);
        }
      });
    });
  }


};