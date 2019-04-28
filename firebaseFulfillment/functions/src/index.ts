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

app.intent<{ color: string }>('FavouriteColour', (conv, { color }) => {
  conv.close(
    `You said your favourite colour was ${color}. Here's your fortune. ${getFortune()}`
  );
});

const getFortune = (): string => {
  const fortunes = [
    "You will end up negotiating Brexit. Don't worry it's not like you're going to do a worse job than others who have tried.",
    'You will get a robot to tell you your fortune. Just like Tom Hanks in that film. Hopefully it will go better for you.',
    'Everything will probably be fine. Or things might go badly.',
  ];
  const randomNumber = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomNumber];
};

exports.fortuneTeller = region('europe-west1').https.onRequest(app);
