const nodemailer = require('nodemailer')
const cron = require('node-cron')
    
    export  const transporter  = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'dhonibalabala@gmail.com',
            pass: 'wsdpzjzfwkioptuv' 
        },
    });
    
   