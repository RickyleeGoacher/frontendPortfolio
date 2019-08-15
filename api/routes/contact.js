const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();
const { google } = require('googleapis');

router.post('/send', (req, res, next) => {

let data = req.body;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN
    },
    tls: {
          rejectUnauthorized: false
      }
});


const mail = {
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: 'Email from portfolio contact form',
    text: `<p>${data.name} (${data.email}) says: ${data.message}</p>`,
    html: `<p>${data.name} (${data.email}) says: ${data.message}</p>`
}

transporter.sendMail(mail, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(req.body);
        console.log(data);
        console.log('info.messageId: ' + info.messageId);
        console.log('info.envelope: ' + info.envelope);
        console.log('info.accepted: ' + info.accepted);
        console.log('info.rejected: ' + info.rejected);
        console.log('info.pending: ' + info.pending);
        console.log('info.response: ' + info.response);
        return res.status(200).json({'Message': 'Message sent!'});
    }
    transporter.close();
});

});

module.exports = router;