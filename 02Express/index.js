const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || 8000;
//connections
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongoose Connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Schema

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    require:true
  },
  LastName:{
    type:String,
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  jobTitle:{
    type:String,
  },
  gender:{
    type:String,
  },
})

//model
const User = mongoose.model('user',userSchema);

app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
  fs.appendFile('log.txt', `${Date.now()}:${req.method}:${req.path}\n`, (err, data) => {
    next();
  })
});


app.get("/users", (req, res) => {
  const html = `
    <ul>${users.map((user) => `<li>${user.first_name}</li>`).join(" ")}</ul>
    `;
  res.send(html);
});



app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName","Ritesh Kumar") //custom header
  //always add x to custom headers
  console.log("i am in get roottt");
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if(!user) return res.status(404).json({error:'user not found'});

  return res.json(user);
});

// app.route("api/users/:id").get((req,res)=>{

// })



app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "Success", id: users.length });
  });
});

app.patch("/api/users:id", (req, res) => {
  //todo : edit the user with id
  return res.json({ status: "pending", });
});

app.delete("/api/users:id", (req, res) => {
  //todo : edit the user with id
  return res.json({ status: "pending" });
});

app.listen(port, () =>
  console.log(`server started at port http://localhost:${port}`)
);


