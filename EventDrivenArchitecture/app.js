const logManager = require("./logManager");
require("./logHandlers");

logManager.logToConsole("This is a console log message.");
logManager.logToFile("This is a file log message.");
logManager.logToAll("This is a log message for both console and file.");
