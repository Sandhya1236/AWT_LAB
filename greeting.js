var http=require('http');
var fs=require('fs');
var server=http.createServer((req,res)=>
{
        fs.readFile("hello.txt",(err,data)=>
        {
            if(err)
                throw err;
            else
            {
                res.write(data);
                res.end();
            }
        }
        )
    
})
server.listen(8001)