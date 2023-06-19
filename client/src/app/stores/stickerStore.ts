import { defineStore } from "pinia";
import jwt_decode from 'jwt-decode'
import { $host, $authHost } from "../api/api";
 
export const useStickerStore = defineStore('sticker', {
    state: () => ({
        stickers: [],
        sticker: []
    }),
    actions: {
        async getAllSticker() {
            const {data} = await $host.get('sticker/stickers')
            this.stickers.push(data as never)
            return this.stickers
        },
        async getOneSticker (id:number) {
            const {data} = await $authHost.get(`sticker/sticker/:${id}`)
            this.sticker.push(data as never)
            return this.sticker
        },
        async getUpdateSticker(id: number, title: string, info: string) {
            const {data} = await $authHost.put('sticker/edit', {id, title, info})
            this.stickers.splice(data.id, 1, data as never)
            return this.stickers
        },
        async generateCode (code: string, id: number) {
            const {data} = await $authHost.put('sticker/create-code', {id, code})
            this.stickers.splice(data.id, 1, data as never)
            return this.stickers
        },
        async stickerFlag (isDone: boolean, id: number) {
            const {data} = await $authHost.put('sticker/sticker-flag', {isDone, id})
            this.stickers.splice(data.id, 1, data as never)
            return this.stickers
        }
    }
})