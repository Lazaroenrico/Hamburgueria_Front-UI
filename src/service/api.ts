import axios from "axios";
/*
const Api = axios.create({
    baseURL: 'https://blue-hamburgueria-production.up.railway.app/'
})

Api.interceptors.request.use((config: any) => {
    try {
        const token = localStorage.getItem("jwt");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
    catch (error: any) {
        console.error(error);
    }

})
*/
export const Api = axios.create({ baseURL: "http://localhost:3333" });

export default Api