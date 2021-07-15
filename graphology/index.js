const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


  app.post("/email-1",function(request,response){
        // console.log(request.body.firstName);
        var name = request.body.firstName + " "+ request.body.lastName;
        var email = request.body.email;
        var phone = request.body.phone;
        var message = request.body.message;
        console.log(name);

            var smtpTransport = nodemailer.createTransport({
              service: "Gmail",
              host:  "smtp.gmail.com",
              port: 587,

              auth: {
                XOAuth2: {
                  user: "graphologist2021@gmail.com", // Your gmail address.
                  //                                       // Not @developer.gserviceaccount.com
                  // clientId: "140609046432-sj16m94nof1aivp3qe18nac9uqcla166.apps.googleusercontent.com",
                  // clientSecret:"O9CGpOr5aFFGu2g1iSjSRTu4",
                  // refreshToken: "1//04RiplKIQMEcpCgYIARAAGAQSNwF-L9IrF0slYgkc4NivkZre2KLOcDycQdKqIDzinj8yA9wz6_iwn0nwhWBmMgj_ba0IW5r5CdU"
                  pass: 'gauri@123'
                }
              },
           
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
              }

        });

        console.log(smtpTransport);


        var text = `From: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`;
        const mail = {
            from: "graphologist2021@gmail.com",
            to: "graphologist2021@gmail.com",
            subject:"New Enquiry From Website ",
            text: text,
          };
        //   const mail2 = {
        //     from: "graphologist2021@gmail.com",
        //     to: email,
        //     subject:"Thank you for Contacting Vovec Infotech ",
        //     text: "We have recieved your message.We will get back to you soon.Stay Glued!!",
        //   };

          smtpTransport.sendMail(
            mail,
            // console.log("hello"),
            function(err, info){
                if(err != null){
                    console.log(err);
                    // HTML MAIL FAILED 
                    response.redirect('/fail.html')
                }else{
                    console.log(info);
                    response.redirect('/index.html')
                }
            }

          );
          
        //   smtpTransport.sendMail(
        //     mail2,
        //     function(err, info){
        //         if(err != null){
        //             console.log(err);
        //             // HTML MAIL FAILED 
        //             response.redirect('/fail.html')

        //         }else{
        //             console.log(info);
        //             response.redirect('/index.html')
        //             // response.redirect('/fail.html')
        //         }
        //     }

        //   );
        
  });

  app.listen(8080);

