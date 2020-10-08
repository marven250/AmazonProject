const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HXHgYKZPkbq3P8hM26bcTJyyN7UlVguMAvzOMCIVgD3FUuvO8FXbv325RdNgbP2q8my2HUIrsggAjU4ZGHzViwp00l7NpgERd"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/marven", (req, res) => {
  res.status(200).send("Big Money Marven");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Reuqest Received for this amount => ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //submission of currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// base url: http://localhost:5001/clone-17017/us-central1/api
