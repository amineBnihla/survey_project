import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Store from '../src/store/index'
import Router from '../src/router/index'

const app = createApp(App)
app.use(Store)
app.use(Router)
app.mount('#app')
