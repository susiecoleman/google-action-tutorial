# Create a Backend using Firebase Functions

_What is the Firebase Function for? Once Dialogflow has transformed the unstructured data into structured data it submits a POST request to a HTTP endpoint that will provide the response that will be sent to the user. This backend can be built using a firebase function (but there's no reason that you couldn't build an alternative backend service._

The src directory has a bare bones firebase function set up to handle POST requests from Dialogflow. This is going to be the backend

## Things to be done

Install [firebase-tools](https://github.com/firebase/firebase-tools) `npm install -g firebase-tools`. This is for deploying the firebase function.

Login to firebase tools from the command line using `firebase login`

Use `firebase list` to see the name of your projects.

Use `firebase use <project-id>` to set the ID to the ID of the project you created in Step 1

The next step is to deploy your function to the Cloud. Make sure that you are in the `functions` directory. Then run `yarn deploy`. Once this step is completed the URL of your function will be shown. Your function can be viewed by going to the [Firebase console](https://console.firebase.google.com)

Copy the URL and go back to the Dialogflow Console.

Go to 'Fulfillment'

Enable Webhook and paste the URL of your function into the URL box.
