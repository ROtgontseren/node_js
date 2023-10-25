const express = require("express");

const fs = require("fs");

const {v4: uuidv4} = require("uuid")

const app = express();

const PORT = 8008;

app.use(express.json());

app.get("/api/users", (req,res) => {
    console.log("Get all users");
    res.status(200).json({message: "Get success"});
});
app.post("/api/users", (req,res) => {
    console.log("Create new user");
    
    const newUser = {id: uuidv4(), ...req.body};
    
    const { users } = JSON.parse(
        fs.readFileSync( "users.json", {encoding : "utf-8"})
        );
    console.log("Con", users);
    users.push(newUser);

    console.log("Con", users);
    fs.writeFileSync("users.json", JSON.stringify({users}), {encoding: "utf-8"});

    res.status(201).json({message: "Post success"});
});
app.put("/api/users/:id", (req,res) => {
    console.log("Put user by id");
    res.status(200).json({message: "Put success"});
});
app.delete("/api/users/:id", (req,res) => {
    console.log("Delete user by id");

    const {userId} = req.params;
    const { users } = JSON.parse(
        fs.readFileSync( "users.json", {encoding : "utf-8"})
        );
    
    const index = users.findIndex((el)=> el.id === userId );
    if(index < 0 ){
        res.status(400).json({message: `${userId} тай хэрэглэгч олдсонгүй`})
    }else {
        users.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify({users}), {encoding: "utf-8"});
    res.status(200).json({message: "Delete success"});

}

});

app.listen(PORT, () => { console.log(`server is listining at ${PORT} port`)});