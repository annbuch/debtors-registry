import axios from "axios";

export const api = axios.create({

    baseURL: "/api/v1",

    headers:{
        Authorization:import.meta.env.VITE_API_TOKEN,
        "Content-Type": "application/json",
    }

});