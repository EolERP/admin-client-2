import './app.css'
import App from './App.svelte'
import {setupLocales} from "./i18n";

setupLocales();

const app = new App({
  // @ts-ignore
  target: document.getElementById('app'),
})

export default app
