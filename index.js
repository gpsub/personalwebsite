const express = require("express")
const bodyparser = require("body-parser")

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(__dirname))
app.get("/",function(req,res){
    res.sendFile(__dirname+"index.html")
})


app.listen(3000,function(){
    console.log("Server running on port 3000")
})