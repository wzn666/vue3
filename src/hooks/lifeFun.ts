import { onMounted } from "vue"

type Option = {
    el: string
}
export default function (options: Option): Promise<{ baseUrl: string }> {
    return new Promise((res) => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            img.onload = () => {

                res({
                    baseUrl: base64(img)
                })
            }
        })

        const base64 = (el: HTMLImageElement) => {
            console.log(el);
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = el.width
            canvas.height = el.height
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
            return canvas.toDataURL('image/png')
        }
    })
}