const http = require("http");
const url = require("url");
const fs = require("fs");
const express = require("express");

const app = express();


app.get("/",(req, res)=>{
  return res.send("hello from Home page"+"my name is"+req.query.name)
});
app.get("/about",(req, res)=>{
  return res.send("hello from About page")
});

// const myserver = http.createServer((req, res) => {
//   if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}:${req.url}new Request Recived\n`;
//   const myurl = url.parse(req.url, true);
//   console.log(myurl);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myurl.pathname) {
//       case "/":
//         res.end("homepage");
//         break;
//       case "/about":
//          username = myurl.query.username;
//          search = myurl.query.search;
//          userid = myurl.query.userid;
//         res.end(`i am ${username} i have a ${search} and my userid is ${userid} `);

//         break;
//       default:
//         res.end("404 error");
//     }
//   });
// });

const myserver = http.createServer(app);

myserver.listen(8000, () => console.log("server started at port 8000"));
