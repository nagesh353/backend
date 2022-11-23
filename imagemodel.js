const mongoose=require('mongoose')
const imageSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        data:Buffer,
        ContentType:String
    }
})
module.exports=mongoose.model('image',imageSchema)