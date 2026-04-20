import { Server } from "http";
import app from "./app";
import config from "./config";
import { logger } from "./shared/logger";
async function main() {
  const server: Server = app.listen(config.port, () => {
    // console.info(`✅ Server is running on http://localhost:${config.port}`);
    logger.info(`✅ Server is running on port:${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        // console.log("Server closed!");
        logger.info("Server closed!");
      });
    }
    process.exit(1);
  };

  process.on("uncaughtException", (error) => {
    console.log(error);
    // logger.error(error);
    exitHandler();
  });

  process.on("unhandledRejection", (error) => {
    console.log(error);
    // logger.error(error);
    exitHandler();
  });
}

main();
