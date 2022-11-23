const route=require('express')
const app=route();
const path=require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))

})
app.listen(3200,()=>console.log("server runnuing.................."))
