import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardVue from './globalComponents/card.vue'
import useResize from 'resize-wzn-vue'
import loading from './components/loading'
import { MyUse } from './myUse'
// console.log(HasPermission)
export const app = createApp(App)
app.component('card', cardVue)
app.use(useResize)
MyUse(loading)
app.config.globalProperties.$env = 'dev'
app.config.globalProperties.$filters = {
    format<T>(srt: T) {
        return 'hello' + '--' + srt
    }
}


declare module 'vue' {
    export interface ComponentCustomProperties {
        $env: string
        $filters: {
            format<T>(srt: T): string
        },
        _loading: {
            show: () => void
            hide: () => void
        }
    }
}
app.mount('#app')

// app.component('HasPermission', HasPermission)
// console.log(app)
