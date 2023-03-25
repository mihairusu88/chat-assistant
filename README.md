# Chat Assistant

Simple tool built with Vue 3 that uses the Open AI [chat completion API](https://platform.openai.com/docs/guides/completion) to create a chat assistant.

<img src="https://github.com/mihairusu88/chat-assistant/blob/master/screenshot.png" alt="chat-assistant" width="600">

## How to use
```
yarn install
```

Rename .env.example to .env and add your API key. You can get your key at [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).

```
VITE_OPENAI_API_KEY='ADD_YOUR_KEY_HERE'
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Preview for production
```
yarn preview
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://vitejs.dev/config/).

### Check live demo on netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7cc4ef0-82e7-4020-982a-1df52dc79eeb/deploy-status?branch=master)](https://app.netlify.com/sites/chat-assistant/deploys)

[Live Demo](https://chat-assistant.netlify.app/)