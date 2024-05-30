const eventManager = require("./eventManager");
const fs = require("fs");
const path = require("path");

eventManager.on("logToConsole", (message) => {
  console.log(`Console Log: ${message}`);
});

eventManager.on("logToFile", (message) => {
  const logFilePath = path.join(__dirname, "logs.txt");
  fs.appendFile(
    logFilePath,
    `${new Date().toISOString()} - ${message}\n`,
    (err) => {
      if (err) {
        console.error("Error writing to log file", err);
      } else {
        console.log("Logged to file");
      }
    }
  );
});

module.exports = eventManager;
