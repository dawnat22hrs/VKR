import { defineStore } from "pinia";
import jwt_decode from 'jwt-decode'
import { $host, $authHost } from "../api/api";
 
export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        newUser:[]
    }),
    actions: {
        async setLogin(nickname: string, password: string) {
            const {data} = await $host.post('/user/login', {
                nickname,
                password,
            })
            localStorage.setItem('token', data.token)
            this.users.push(jwt_decode(data.token))
            return this.users
        },
        async setRegistration(nickname: string, email: string, password: string, name: string, surename: string, group: string, phone: string) {
            const {data} = await $host.post('user/registration', {
                nickname,
                email,
                password,
                name,
                surename,
                group,
                phone,
            })
            localStorage.setItem('token', data.token)
            this.users.push(jwt_decode(data.token))     
            return this.users
        },
        async getAllUser() {
            const {data} = await $authHost.get('user/users')
            return data
        }
    }
})