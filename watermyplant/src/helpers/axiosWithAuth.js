import axios from "axios";

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: ' https://web46-watermyplants2.herokuapp.com/api/'
    })
}

export default axiosWithAuth;