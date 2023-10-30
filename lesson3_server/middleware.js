const express = require("express");
// const fs = require("fs");
// const {v4: uuidv4} = require("uuid");
const {logger} =require("")


const PORT = 7008;
const app = express();

app.use(express.json());


app.listen(PORT, () => { console.log(`server is listining at ${PORT} port`)});