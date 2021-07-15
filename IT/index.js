const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


  app.post("/email",function(request,response){
        // console.log(request.body.firstName);
        var name = request.body.firstName + " "+ request.body.lastName;
        var email = request.body.email;
        var phone = request.body.phone;
        var message = request.body.message;


            var smtpTransport = nodemailer.createTransport({
              service: "Gmail",
              auth: {
                XOAuth2: {
                  user: "infotechvovec@gmail.com", // Your gmail address.
                                                        // Not @developer.gserviceaccount.com
                  clientId: "728913735499-meqfuda4o9cauhhfuvk5agb04c1n3urt.apps.googleusercontent.com",
                  clientSecret: "aIdIKCTfBgDvtsymyzD6YQkc",
                  refreshToken: "1//049peGlcSQzrUCgYIARAAGAQSNwF-L9IrCxeXOGsfZ8gPr0FsrRt-MAbNnYTJeTF-GZ1ucD_JTXXS_OIqy_yinFx3Rp7a5IT0hkQ"
                }
              }
           
            // tls: {
            //     // do not fail on invalid certs
            //     rejectUnauthorized: false
            //   }

        });


        var text = `From: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`;
        const mail = {
            from: "infotechvovec@gmail.com",
            to: "infotechvovec@gmail.com",
            subject:"New Enquiry From Website ",
            text: text,
          };
          const mail2 = {
            from: "infotechvovec@gmail.com",
            to: email,
            subject:"Thank you for Contacting Vovec Infotech ",
            text: "We have recieved your message.We will get back to you in 24-48 hours.Stay Glued!!",
          };

          smtpTransport.sendMail(
            mail,
            function(err, info){
                if(err != null){
                    console.log(err);
                    // HTML MAIL FAILED 
                    response.redirect('/fail.html')
                }else{
                    console.log(info);
                    response.redirect('/contact.html')
                }
            }

          );
          
          smtpTransport.sendMail(
            mail2,
            function(err, info){
                if(err != null){
                    console.log(err);
                    // HTML MAIL FAILED 
                    response.redirect('/fail.html')

                }else{
                    console.log(info);
                    response.redirect('/contact.html')
                    // response.redirect('/fail.html')
                }
            }

          );
        
  });

  app.listen(8000);

