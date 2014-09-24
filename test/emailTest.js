/**
 * Created by Moroni on 9/17/2014.
 */
var email = require('../controllers/email.js');
var secrets = require('../config/secrets.js');

var mailOptions = {
    from: secrets.emailInfo.user, // sender address
    to: secrets.emailInfo.user, // list of receivers
    subject: 'Mocha Test', // Subject line
    text: 'Mocha test', // plaintext body
    html: '<b>Bold Mocha test</b>' // html body
};

describe('email', function() {
    this.timeout(5000); //increase timeout from default 2000ms
    describe('#sendEmail()', function() {
        it('should return send email to ' + secrets.emailInfo.user, function(done) {
            email.sendEmail(mailOptions, function() {
                done();
                //TODO assert some things
            });
        })
    })
});

console.log('EOF!');
