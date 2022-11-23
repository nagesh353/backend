const express=require('express')
const mongoose=require('mongoose')
const students=require('./model')
const bodyparser=require('body-parser')
const cors=require('cors')
const cookies=require('cookie-parser')
const multer=require('multer')
const bcrypt = require('bcrypt')


const app=express()
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('connected')).catch((err)=>console.log(err))

app.post('/log', async (req,res)=>
{
const{name,email,mobileno} = req.body
     const password = await bcrypt.hash(req.body.password,10)
     console.log(password)
     
    const data= new students({name,password,mobileno,email});
    await data.save((err,result)=>{
        if(err){
            console.log('eroo...........',err)
            res.send(err)
        }
        else{
            console.log('su........')

            res.send(result)
        }
    })
})
async function check(id){
    console.log(id)
     await students.findOne({name:id}).then((data)=>
     {
        if(!data){
            return data;
            console.log(data)
        }
     }).catch((err)=>{
        return err
    }
        )
    }
app.post('/nagesh/:id/:name',(req,res)=>{
    const{id,name}=req.params
    console.log(id,name)
    res.send("jhfy")

})
app.put('/update', async (call,res)=>{
    console.log("update")
    const{name,password}=call.body
    const check=  students.findOneAndUpdate({name:name},{$set:{password:password}})
    res.json(check)
})
app.delete('/delete', async (req,res)=>{
    const{name}=req.body
        students.findOneAndDelete({name:name}).populate(name).then((name)=>{console.log(name)})
       res.json("deleted")
 })
// app.get('/', async (req,res)=>
// {
//     console.log("get............")
//     await students.find().then((data)=>{
//         console.log(data)
//          res.json(data)}).catch((err)=>console.log(err),res.json(err))
//     console.log('data')
    //console.log(data)
  //  res.json(data)
//})
//stirage of image in mongodb
const Storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname);

    }
})
const upload=multer({
    storage:Storage,
}).single('testImage')
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            // const newImage=new imageSchema({
            //     name:req.body.name,
            //     image:{
            //     data:req.file.filename,
            //     ContentType:'image/png'
           // }})
            //newImage.save().then((data)=>res.send(data)).catch((err)=>console.log(err))
            //res.send("data added succesfully")
        }
    })

})
app.get('/', (req, res) => {
    res.cookie('name', 'knkjjknkjdh@334@#$&').send('Cookie-Parser');
 });
 function mul(a,b){
    return a*b;
 }
 module.exports={
    check,
    Storage,
    mul
 }
app.listen(3000,()=>console.log('server running ...........'))