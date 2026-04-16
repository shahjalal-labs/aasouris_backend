import { Queue } from "bullmq";
import redisClient from "../../shared/redis";

export const notificationQueue = new Queue("notifications_kal_sayegh", {
  connection: redisClient,
});
