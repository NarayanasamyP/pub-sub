# React + Vite + Google Cloud
This example project is for how to publish message to google cloud from the react appliaction using nodejs service.

`Note: if you are running this example you should change the topic, subscription and access keys for based on your account.`

# To Run the client side connection to the google cloud pub sub.
- Open three terminal windows.
- `run` 'npm run dev' in terminal 1 for UI
- `run` 'node src/service/createservice.js' in terminal 2
- `run`  'node src/service/pullservice.js' in terminal 3

UI
![image](https://github.com/NarayanasamyP/pub-sub/assets/34939696/75e5f7ef-d36e-4851-aff8-38f3fad01c40)

GC:
![image](https://github.com/NarayanasamyP/pub-sub/assets/34939696/8bfc2029-afbb-4b72-a6ae-57131cc0f551)

Response of pull:
![image](https://github.com/NarayanasamyP/pub-sub/assets/34939696/1e17a324-0378-412b-b134-c4b607d17c53)


`Note:` for security reasons we have removed the `pubsub-test.json` file content. You can generate and replace the object. Also, kindly rename the `Topic, Subscription` based on your google cloud account configuration.

## How to setup Google cloud Pub/Sub?
Check this document for steps to configure [Getting started with GC Pub/Sub](Getting-started.docx)
