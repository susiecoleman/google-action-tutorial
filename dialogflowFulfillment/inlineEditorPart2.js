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
      text: "Welcome to the AI fortune teller. What is your favourite colour?",
      speech: "Welcome to the AI fortune teller. What is your favourite colour?"
    })
  );
});

app.intent("FavouriteColour", (conv, { color }) => {
  conv.close(
    `You said your favourite colour was ${color}. Here's your fortune. ${getFortune()}`
  );
});

const getFortune = () => {
  const fortunes = [
    "You will end up negotiating Brexit. Don't worry it's not like you're going to do a worse job than others who have tried.",
    "You will get a robot to tell you your fortune. Just like Tom Hanks in that film. Hopefully it will go better for you.",
    "Everything will probably be fine. Or things might go badly."
  ];
  const randomNumber = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomNumber];
};

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
