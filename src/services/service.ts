import axios from "axios";


const axiosService  = axios.create({
    baseURL :"https://www.getonbrd.com/api/v0/",
  
})


export default axiosService