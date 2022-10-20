import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASEURL,
    timeout: 30000,
    headers:{
        "Content-type": "application/json"
    }
})