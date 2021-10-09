const express = require("express")
const app = express()
// console.log(app)
const midleware = require("./midleware")
app.use(midleware)



app.get("/",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/HomePage.html")
})
app.get("/OurServices",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/OurServices.html")
})
app.get("/ContactUs",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/ContactUs.html")
})
app.get("/css/style.css",(req,res) => {
    res.sendFile(__dirname+"/public/css/style.css")
    console.log("url",req.url)
console.log("method",req.method)
})

app.listen(3000,()=>{
    console.log("server is running",3000)
})