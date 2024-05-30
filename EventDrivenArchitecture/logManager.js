const eventManager = require("./eventManager");

const logManager = {
  logToConsole: (message) => {
    eventManager.emit("logToConsole", message);
  },
  logToFile: (message) => {
    eventManager.emit("logToFile", message);
  },
  logToAll: (message) => {
    eventManager.emit("logToConsole", message);
    eventManager.emit("logToFile", message);
  },
};

module.exports = logManager;
