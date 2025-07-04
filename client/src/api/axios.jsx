import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
})


export const LoginUser = (userData) => {
    return api.post("/auth/login",userData)
}

export const SignupUser = (userData) => {
    return api.post("/auth/signup",userData)
}