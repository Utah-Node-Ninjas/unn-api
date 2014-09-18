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

email.sendEmail(mailOptions); worked when running direction with node, not mocha

//TODO need to get this commentted section functional, might need a callback, and use done()
/*describe('email', function(){
    describe('#sendEmail()', function(){
        it('should return send email to ' + secrets.emailInfo.user, function(){
            email.sendEmail(mailOptions);
        })
    })
})    */


console.log('Done!');
//manual test for now
//TODO assert some things