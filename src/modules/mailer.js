const nodemailer = require('nodemailer');
const mailConfifg = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host: mailConfifg.host,
    port: mailConfifg.port,
    auth: {
        user: mailConfifg.user,
        pass: mailConfifg.pass
    }
});

module.exports = transport;