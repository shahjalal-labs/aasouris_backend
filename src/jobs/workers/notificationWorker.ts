import { Worker } from "bullmq";
import redisClient from "../../shared/redis";

import { NotificationChannel, NotificationType } from "@prisma/client";
import { sendSingleNotification } from "../../app/modules/notification/notification.service";

new Worker(
  "notifications_kal_sayegh",
  async (job) => {
    const { name, data } = job;
    switch (name) {
      // new schedule
      //w: (start)╭────────────  newSchedule ────────────╮
      case "newOrder": {
        const { payload, sellerId } = data;

        // Build a readable summary for this seller
        const productSummary = payload.items
          .map(
            (i: { productName: string; quantity: number; subtotal: number }) =>
              `${i.quantity} x ${i.productName} ($${i.subtotal})`,
          )
          .join(", ");

        const totalAmount = payload.totalAmount;

        // Send notification to the seller
        /* await sendSingleNotification(
          sellerId, // receiverId
          "New Order Received", // title
          `Your products have been ordered: ${productSummary}. Total: $${totalAmount}`, // body
          NotificationType.ORDER_CREATED, // type
          NotificationChannel.BOTH, // channel
          {
            orderId: payload.orderId,
            productIds: payload.items.map((i: any) => i.productId),
            orderItemIds: payload.orderItemIds,
          }, // metaData
        ); */

        break;
      }
      //w: (end)  ╰────────────  newSchedule ────────────╯

      // new connection request notif
      //w: (start)╭────────────  newConnection ────────────╮
      /* case "newConnection": {
        const { receiverId, userId, fullname, requestId } = data;
        await sendSingleNotification(
          receiverId,
          "New connection request",
          `${fullname} has sent you a connection request`,
          "CONNECTIONS",
          "BOTH",
          {
            requestId,
          },
          userId, // senderId
        );
        break;
      } */
      //w: (end)  ╰────────────  newConnection ────────────╯

      //w: (start)╭────────────  requestAcceptance ────────────╮
      /* case "requestAcceptance": {
        const { senderId, fullname, receiverId, requestId } = data;
        await sendSingleNotification(
          senderId, // notification receiverId
          "Connection request accepted",
          `${fullname} accepted your connection request`,
          "CONNECTIONS",
          "BOTH",
          //notif metadata
          {
            requestId,
          },
          receiverId, // notification senderid
        );
      } */
      //w: (end)  ╰────────────  requestAcceptance ────────────╯
    }
  },
  {
    connection: redisClient,
  },
);
