const fs = require("fs");
const path = require("path")

const readFile = (fileName) => {
    // console.log("Path", path.join(__dirname, "../data"));
    const users = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data") + fileName, {encoding: "utf-8"}));
    console.log("uu", users)
    return users;
};

module.exports = {readFile};


  const logWrite = () => {
   const logWinston = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
          new winston.transports.File({ filename: 'combined.log' }),
        ],
      });
      logWinston.log("error",`${new Date}`);
      next();
  }