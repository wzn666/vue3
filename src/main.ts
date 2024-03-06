import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardVue from './globalComponents/card.vue'

const app = createApp(App)
app.mount('#app')
app.component('card', cardVue)
