import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardVue from './globalComponents/card.vue'

// console.log(HasPermission)
const app = createApp(App)

app.mount('#app')
app.component('card', cardVue)
// app.component('HasPermission', HasPermission)
console.log(app)
