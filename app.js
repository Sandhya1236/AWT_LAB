var express=require('express')
var app=new express()
app.listen(8000,()=>{
    console.log("Server started.....")
})
app.get("/",(req,res)=>{
    res.send("First Get Request")
})
app.post("/",(req,res)=>{
    res.send("First Post Request")
})
app.put("/",(req,res)=>{
    res.send("First Put Request")
})
// app.delete("/",(req,res)=>{
//     res.send("First Delete Request")
// })
app.all("/",(req,res)=>{
    res.send("First Request")
})