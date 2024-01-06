import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { promises as fsPromises, existsSync, mkdir } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyy.MM.dd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    const logsDirectory = path.join(__dirname, "..", "logs");

    // Check if the "logs" directory exists, and create it if it doesn't
    if (!existsSync(logsDirectory)) {
      mkdir(logsDirectory, { recursive: true });
    }

    // Append the log entry to the specified log file
    await fsPromises.appendFile(path.join(logsDirectory, logName), logItem);
  } catch (err) {
    console.error(err); // Log errors to the console
  }
};

const logger = (req, res, next) => {
  const clientIp = req.ip || req.connection.remoteAddress; // Get the client's IP address

  const startTime = new Date(); // Record the start time

  res.on('finish', () => {
    const endTime = new Date(); // Record the end time
    const duration = endTime - startTime; // Calculate the duration in milliseconds

    const logMessage = `${req.method}\t${clientIp}\t${req.headers.origin}\t${req.url}\tStatus:${res.statusCode}\tUser-Agent:${req.get('User-Agent')}\tDuration:${duration}ms`;

    logEvents(logMessage, "reqLog.txt");
    console.log(logMessage);
  });

  next();
};
export default logger;
