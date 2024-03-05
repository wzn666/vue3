import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardVue from './globalComponents/card.vue'
createApp(App).mount('#app')
createApp(App).component('card', cardVue)
