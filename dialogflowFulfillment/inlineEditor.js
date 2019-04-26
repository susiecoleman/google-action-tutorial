"use strict";

// Import the Dialogflow module from the Actions on Google client library.
const { dialogflow, SimpleResponse } = require("actions-on-google");

// Import the firebase-functions package for deployment.
const functions = require("firebase-functions");

// Instantiate the Dialogflow client.
const app = dialogflow({ debug: true });

app.intent("Welcome", conv => {
  conv.ask(
    new SimpleResponse({
      text: "Welcome to the AI fortune teller",
      speech: "Welcome to the AI fortune teller."
    })
  );
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
