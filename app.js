const express = require("express")
const app = express()
const port = 8000 ||process.env.PORT
const sendMail = require('./controllers/sendMail')

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/sendmail',sendMail)

const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`server start on the port no ${port}`)
        })

    }catch(error){
        console.log(error);
    }

}

start()

// app.listen(8000,"127.0.0.1",()=>{
//     console.log("sever start on the port no 8000")
// })