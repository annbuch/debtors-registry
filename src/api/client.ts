import axios from "axios";

export const api = axios.create({

    baseURL:"https://api.bankrot.gov.by/v1",

    headers:{
        Authorization:import.meta.env.VITE_API_TOKEN,
        "Content-Type": "application/json",
    }

});