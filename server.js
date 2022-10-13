const express = require('express');
const mongo = require('mongoose')
const jwt = require('jsonwebtoken')
mongo.set('debug', true);
mongo.connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("dbconnected"))
    .catch((err) => console.log(err))
const app = express();
const bcrypt = require('bcrypt')
const cors = require('cors');
app.use(cors());
app.use(express.json());
secretkey = "nagesh@7095100"
const sch = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true

    },
    password: {
        type: String,
        required: true
    }
}
const verifyToken = (req, res, next) => {
    //console.log(req.headers);
    //console.log(req.headers.authorization)
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        return res.status(403).send("A token is required")
    }
    else {
        try {
            const decode = jwt.verify(token, secretkey)
            req.decode = decode;
            //console.log({ data:decode });
            return next();
        }
    

        catch {
            return res.json({ status: "Error", data: "invalid token" })
        }
    }
}
schema = mongo.Schema(sch);
const mono = mongo.model("newCol", schema)
const message = {
    text: {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        default: Date.now
    }
}
const messages = mongo.model("message", mongo.Schema(message));
app.post('/message', verifyToken, async (req, res) => {
    console.log('req', req);
    if (req.decode) {
        const { message: text } = req.body;
        //console.log(message)
        const data = new messages({ text })
       // console.log({ data });
        // process.exit(1);
        const msg = await data.save()
       // console.log(msg)
        return res.send({ data: "data added succsfully" })

    }

}
)

app.get('/details', verifyToken, async (req, res) => {
       const userName=  req.decode;
       //const id = await mono.findOne({name:userName})
       //console.log("object id ",id)
    let data = await mono.find({}, { name: 1, _id: 0 })
      data = data.filter(x=>
        {
            return x.name!=userName;
        })
    return res.json({ data: data })

})
app.post('/login', async (req, res) => {
   // console.log(req.body)
    const { name, pass } = req.body
    //console.log(pass)
    const uname = await mono.findOne({ name: name })
    //console.log(uname)
    if (uname != null) {
        const check = await bcrypt.compare(pass, uname.password)
      //  console.log(check)
        if (check) {
            const jwtToken = await jwt.sign(name, secretkey)
        //    console.log("hello  i am logged")
            return res.send({ data: "user login succesfully", token: jwtToken })
        }
        else {
            return res.json({ data: "invalid password" })
        }
    }
    else {
        return res.send({ data: "user does not exists" })
    }

})
app.get('/chat', verifyToken, async (req,res)=>
{
    if (req.decode) {

const data= await messages.find({},{text:1,_id:0})
        return res.json({data:data})
    }

})
app.post("/add", async (req, res) => {
    //console.log(req.body)
    //console.log("workind");
    const { name, email, password, mobileno } = req.body
    const user = await mono.findOne({ name: name })
    if (user == null) {
        const data = new mono({ name, email, password, mobileno })
        const pass = await bcrypt.hash(req.body.password, 10)
        data.password = pass
        const val = await data.save()
        res.json({ data: "user added succesfully" })
    }
    else {
        res.json({ data: "user name exists please choose another one" })
    }



})
app.listen(6200, () => console.log("server running......."))