import { SimpleResponse, dialogflow } from 'actions-on-google';
import { region } from 'firebase-functions';

const app = dialogflow<{}, {}>({
  debug: true,
});

app.intent('Welcome', conv => {
  conv.ask(
    new SimpleResponse({
      text: 'Welcome to the AI fortune teller',
      speech: 'Welcome to the AI fortune teller.',
    })
  );
});

exports.fortuneTeller = region('europe-west1').https.onRequest(app);
