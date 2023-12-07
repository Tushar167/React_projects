import axios from "axios";

const url =  axios.create({
    baseURL : "http://www.omdbapi.com/"
})
export default url