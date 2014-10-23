/**
 * Created by Moroni on 9/17/2014.
 * */
var email = require('../controllers/email.js');
var secrets = require('../config/secrets.js');
var supertest = require('supertest');
var app = require('../app');
var assert = require('should');


var mailOptions = {
    from: secrets.emailInfo.user, // sender address
    to: 'joeycozza@gmail.com', // list of receivers
//    to: secrets.emailInfo.user, // list of receivers
    subject: 'Mocha Test', // Subject line
    text: 'Mocha test', // plaintext body
    html: '<b>Bold Mocha test</b>' // html body
};

describe('email', function() {
    this.timeout(5000);
    describe('#sendEmail()', function() {
        it('should return send email to utahnodeninjas@gmail.com', function(done) {
          email.sendEmail(mailOptions, function() {
                done();
                //TODO assert some things
            });
        })
    });


    it('should send testing landing page email', function(done){

      supertest(app)
        .post('/landing_page_email')
        .expect(200)
        .send({name:'Joey', email:'joeycozza@gmail.com', message:'Hello Everybody'})
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });

    });

});

console.log('EOF!');
