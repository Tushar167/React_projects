import axios from "axios";

const url =  axios.create({
    baseURL : "https://fakestoreapi.com"
})

export default url