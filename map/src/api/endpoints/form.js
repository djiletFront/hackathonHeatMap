import axios from "../axios";
const endpoints = {
    getOrders: () => axios.get("/Orders"),
    getCity: (cityId) => axios.get(`/Location/${cityId}`)
};

export default endpoints;
