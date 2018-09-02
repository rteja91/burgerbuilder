import axios from 'axios';

const instance = axios.create({
    baseURL : "https://burgerbuilder-82839.firebaseio.com"
})

export default instance;