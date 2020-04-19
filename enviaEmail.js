var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'COLOQUE AQUI SEU EMAIL',
    pass: 'COLOQUE AQUI SUA SENHA'
  }
});
  
var mailOptions = {
  from: 'COLOQUE AQUI SEU EMAIL',
  to: 'COLOQUE AQUI SUA SENHA',
  subject: 'ASSUNTO DO E-MAIL',
  text: 'CONTEUDO DO E-MAIL'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});