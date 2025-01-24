import { mount } from 'svelte';


import './styles/main.css'
import App from './App.svelte'

//await auth.refresh()

// const app = new App({
//   target: document.getElementById('app'),
// })

const app = mount(App, {
  target: document.getElementById("app")
});

export default App
