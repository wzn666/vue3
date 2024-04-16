import type { App } from "vue";
import { app } from './main'

interface Use {
    install: (app: App, ...options: any[]) => void
}

const installList = new Set()

export function MyUse<T extends Use>(plugin: T, ...options: any[]) {
    if (installList.has(plugin)) {
        console.log('该插件已安装')
        return
    }
    installList.add(plugin)
    plugin.install(app, ...options)
}