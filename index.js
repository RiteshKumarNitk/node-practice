const http= require("http");
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url}new Request Recived\n`;
    fs.appendFile('log.txt',log, (err, data)=>{
        switch(req.url){
            case '/': res.end("homepage");
            break
            case '/about': res.end("i am ravi");
            break
            default: res.end("404 error");
            
        }
        res.end("hello  from server");

    });
})

myserver.listen(8000, ()=>console.log("server started at port 8000"));