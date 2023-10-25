const express = require("express");
const fs = require("fs");

// fs.readFile("text.txt", {encoding: "utf-8"}, (err,data) => {
//     if (err) {
//         console.log(`Error: ${err}`)
//     }
//     console.log("Data = ", data.length);
//     let words = data.split(" ").length;
//     console.log("words = ", words);
//     app.get("/", (res,req) => {
//         res.listenerCount();
//         console.log("count", listenerCount)
//     })
// })

const app = express();

app.get("/", (req,res) => {
    res.send("hello express server");
});

// app.get("/about", (req,res) => {
//     res.status(200).json({name : "naraa",age : 29, score : [100, 102] ,
// address : {
//     no: 100,
// }});
// });

app.get("/about", (req,res) => {
    const content = fs.readFileSync("text.txt",{encoding: "utf-8"});
    const count = content.split("").length;
    
res.send("count - " + count);

app.get("/user/:userId", (req,res) => {
    const {userId} = req.params;
    console.log("ui", userId);
    const findUser = users.filter((user) => user.id === Number(userId));
    if (findUser.length === 0) {
       res.status(404).json({message : "not found"})
    } else {
        res.status(200).json({message : "found is user", user : findUser[0]})
    }
})
 
})


app.listen(8008, () => console.log("SERVER from is listining at 8008 port"));