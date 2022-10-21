import axios from "axios";


const Api = axios.create({

    //set endpoint API
    baseURL: process.env.REACT_APP_API,

    //set header axios
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});


export {Api}