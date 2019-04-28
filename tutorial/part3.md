# Part 3: What next?

There are a few options for what you could do next with your Action.

## Option 1: Stop using the Inline Editor and swtich to TypeScript.

Instead of using the inline editor use a firebase function instead for the back end. Follow [these steps](./extras/firebaseBackend.md) to switch from the inline editor to using firebase.

### Extra Docs

Firebase functions [docs](https://firebase.google.com/docs/functions/)

[Blog post](https://www.theguardian.com/info/2019/jan/31/hey-google-help-me-use-cloud-functions) on running and testing the function locally.

## Option 2: Add Rich Responses

This tutorial has only dealt with Simple Responses. It is possible to add more complex responses. The [docs](https://developers.google.com/actions/assistant/responses) show the range of responses available.

## Option 3: Add SSML

SSML adds markup to text to make the conversion from text to speech sound more natural. Google Assistant supports a selection of SSML [tags](https://developers.google.com/actions/reference/ssml).

SSML can be added to the simple response like this:

```javascript
new SimpleResponse({
      text: "Welcome to the AI fortune teller",
      speech: "<speak>Welcome to the AI fortune teller.</speak>"
    }
```

### Debugging

The Google Action simulator (go to the Google Actions [Console](https://console.actions.google.com) then go to `Test > Simulator > Audio`) has support for you to test out SSML

You don't have to use the Simple Response you could just do:

```javascript
conv.ask("<speak>Welcome to the AI fortune teller.</speak>");
```

Use the Simple Response object if you want the text displayed to be different from the text spoken. You also need to use it if the only thing your SSML will do is play an audio file.
