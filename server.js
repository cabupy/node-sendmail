/*
    Empresa: Vamyal S.A.
    Author: Carlos Vallejos
    Fecha: Noviembre del 2015
*/

'use strict'

var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  host: process.env.VAMYAL_SMTP_HOST,
  secureConnection: true,
  port: 587,
  auth: {
    user: process.env.VAMYAL_SMTP_USER,
    pass: process.env.VAMYAL_SMTP_PASS
  },
  tls: {rejectUnauthorized: false},
  debug: true
})

var mailOptions = {
  from: 'Carlos Vallejos <carlos@vamyal.com>',
  to: 'carlos@vamyal.com',
  subject: 'Asunto del mail',
  // text: 'Cuerpo del mail en texto plano'
  html: '<b>Hola Mundo desde nodemailer !</b>'
}

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error)
  }
  console.log('Message sent: ' + info.response)
})

