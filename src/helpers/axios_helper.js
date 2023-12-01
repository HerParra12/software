import axios from "axios";

export const getAuthToken = () => {
    return window.localStorage.getItem('token');
};

export const setAuthHeader = (token) => {
    window.localStorage.setItem('token', token);
};

export const setUserData = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user));
}

export const getUserData = () => {
    const userDataString = window.localStorage.getItem('user');
    return userDataString ? JSON.parse(userDataString) : null;
};

axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.headers.post["Content-Type"] = 'application/json';

export const request = (method, url, data) => {
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    });
};