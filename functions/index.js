const functions = require("firebase-functions");
const express = require("express");
const app = express(); 
const cors = require("cors");
require('dotenv').config();
const stripe = require("stripe")("sk_test_51KCLz8SJzcNHdY9YzaN6TuFOkc2hDNTvHFtszEHNU4MYRYluFTKavkziOkam7qXNG3blk9qUJbl127v0sF25CbV900encLcex8");
const uuid = require("uuid").v4;
// middlewares
app.use(cors());
app.use(express.json());
// api routes
app.get("/", (req, res)=>{
  res.status(200).send("Backend For Aj Store And Payment Processing");
});
app.post("/payments/create", async(req, res)=> {
  const items = req.body;
  console.log("abcd",req.body);
  console.log("items are:",items)
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(items.price*100),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen 
exports.api = functions.https.onRequest(app);