const dateandtime = require("./dateandtime")
var http=require('http')
var server=http.createServer((req,res)=>
{
    if(req.url=='/')
    {
        res.write("Date is :"+dateandtime.d)
        res.write("\nTime is :"+dateandtime.t)
        res.end()
    }
})
server.listen(8000);
