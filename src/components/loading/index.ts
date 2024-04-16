import type { App } from 'vue'
import { createVNode, render } from 'vue'
import Loading from './index.vue'
// import { install } from 'element-plus'

export default {
    install(app: App) {
        const vnode = createVNode(Loading)
        render(vnode, document.body)
        app.config.globalProperties._loading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide
        }
        // app.config.globalProperties._loading.hide()
    }
}