const express = require("express");
const users = require("./MOCK_DATA.json");


const app = express();
const port=8000;

app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>.join(" ")`)}
    </ul>
    `
    res.send(html);
})

app.get('/api/users',(req,res)=>{    
    return res.json(users);
});

app.get('/api/users/:id',(req,res)=>{    
   const id = Number(req.params.id);
   const user = users.find((user)=>user.id === id);
    return res.json(user);
});

// app.route("api/users/:id").get((req,res)=>{

// })

app.post('api/users',(req,res)=>{
    //todo : create new users
    return res.json({status:pending});
});

app.patch('api/users:id',(req,res)=>{
    //todo : edit the user with id 
    return res.json({status:pending});
});

app.delete('api/users:id',(req,res)=>{
    //todo : edit the user with id 
    return res.json({status:pending});
});

app.listen(port,()=>console.log(`server started at port http://localhost:${port}`))