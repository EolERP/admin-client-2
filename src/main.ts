import './app.css'
import App from './App.svelte'
import {setupLocales} from "./i18n";
import {authenticate} from "./keycloak";

setupLocales();
// @ts-ignore
authenticate();

console.log({
  someKey: import.meta.env.VITE_SOME_KEY
})

const app = new App({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
