import Stripe from "stripe";
import config from "../config";
import httpStatus from "http-status";
import ApiError from "../errors/ApiErrors";

export const stripe = new Stripe(config.stripe.secret_key!);

// stripe withdraw money
export const transferMoneyToConnectedAccount = async (
  stripeAccountId: string,
  amount: number,
) => {
  //  Retrieve Stripe account
  const account = await stripe.accounts.retrieve(stripeAccountId);

  if (!account.charges_enabled) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Seller Stripe account is not enabled for payouts",
    );
  }

  //  Transfer money
  const transfer = await stripe.transfers.create({
    amount: Math.round(amount * 100),
    currency: "usd",
    destination: stripeAccountId,
  });

  return transfer;
};
