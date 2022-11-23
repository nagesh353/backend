

const test = require('./test2')

class Cube {
    constructor(length) {
    this.length = length;
    }
    
    getSideLength () {
    return this.length;
    }
    
    getSurfaceArea () {
    return (this.length * this.length) * 6;
    }
    
    getVolume () {
    return Math.pow(this.length,3);
    }
 }
    function sum(a,b){
        console.log('addition')
        return a+b;

    }
    function mul(a,b){
        return test.mul(2,10)
     }
    
    // module.exports = {

    // Cube:Cube,
    // sum:sum
    // }
    const express=require('express')
    const mongoose=require('mongoose')
    const students=require('./model')
    const bodyparser=require('body-parser')
    const cors=require('cors')
    const cookies=require('cookie-parser')
    const multer=require('multer')
    
    const app=express()
    app.use(cors())
    app.use(express.json())
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}));
    mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('connected')).catch((err)=>console.log(err))
    
    app.post('/log', async (req,res)=>
    {
        console.log(req.body)
    let body={
        name:req.body.name,
        email:req.body.email,
        mobileno:req.body.mobileno,
        password:req.body.password
    }
        const data= new students({name:req.body.name,email:req.body.email,mobileno:req.body.mobileno,password:req.body.password});
        await data.save().then(()=>console.log('data added ccesfully')).catch((err)=>console.log(err))
        res.json(data)
    })
    async function check(id){
        console.log('id ',id)
          let data=await students.findOne({name:id})
          return data;
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
                res.send("data added succesfully")
            }
        })
    
    })
    app.get('/', (req, res) => {
        res.cookie('name', 'knkjjknkjdh@334@#$&').send('Cookie-Parser');
     });
     
     module.exports={
        Cube,
        sum,
        check,
        Storage,
       mul
     }
    app.listen(3000,()=>console.log('server running ...........'))

    