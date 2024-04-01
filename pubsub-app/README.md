# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
