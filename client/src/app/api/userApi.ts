import { $authHost, $host } from "./api";
import jwt_decode from "jwt-decode"

export const registration = async (nickname: string, email: string, password: string, name: string, surename: string, group: string, phone: string) => { 
    const {data} = await $host.post('/user/registration', {
        nickname,
        email,
        password,
        name,
        surename,
        group,
        phone
    })
    localStorage.setItem('token', data.token)

    return jwt_decode(data.token)
}

export const login = async (nickname: string, password: string) => { 
    const {data} = await $host.post('/user/login', {
        nickname,
        password,
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const logout = async () => {

}