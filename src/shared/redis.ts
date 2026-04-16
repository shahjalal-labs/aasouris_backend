import IORedis from "ioredis";

const redisClient: any = new IORedis({
  host: process.env.REDIS_HOST || "localhost",
  port: parseInt(process.env.REDIS_PORT || "6379"),
  password: process.env.REDIS_PASSWORD,
  db: parseInt(process.env.REDIS_DB || "0"),
  maxRetriesPerRequest: null,
});

// Basic error handling
redisClient.on("error", (err: any) => {
  console.error("Redis Error:", err.message);
});

export default redisClient;
