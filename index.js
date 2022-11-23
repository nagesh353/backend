const express=require('express')
const mongoose=require('mongoose')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app=express();
var key;
app.use(express.json())
var code=function generatecode()
 {
   var min=10000;
   var max=99999;
   var random=Math.floor(Math.random()*(+max + 1 - +min)) + +min;
   return random

 }

 app.post('/token',  async(req,res)=>{
   key= await code().toString();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nageshnimmala48@gmail.com',
      pass: 'tquoxqxhwulxkkqm'
    },
    port:465,
    host:'smtp.gmail.com'
  });

  
var mailOptions = {
    from: 'nageshnimmala48@gmail.com',
    to: req.body.gmail,
    subject: 'security purpose',
    code:'otp',
    message:'please enter that in input box',
    text: 'secret key:'+key
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  console.log('value', key)
  res.json("email sent succesfully")
  
})
app.post('/check', (req,res)=>
{
  if(key==req.body.code)
  {
    console.log("matched")

  }
  else{
    console.log('not matched')
  }
})

  
app.listen(4200,()=>console.log("server running....."))