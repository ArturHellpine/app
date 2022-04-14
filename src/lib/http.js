import axios from "axios";

const HTTP_BASE_URL = "http://10.0.2.100:8000/api/v1";


export default axios.create({
    baseURL: HTTP_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
