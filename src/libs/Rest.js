import axios from 'axios'
import auth from './Auth'

//import Vue from 'vue'

import config from './Config'

let instance = axios.create({
    baseURL: config.BASE_URL,
    timeout: 1000,
    //withCredentials: true,
    responseType: 'json',
    onUploadProgress: function (progressEvent) {
        // TRACK UPLOAD PROGRESS
    },

    onDownloadProgress: function (progressEvent) {
        // TRACK DOWNLOAD PROGRESS
    },
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Request Interceptor
 */
instance.interceptors.request.use(config => {
    config.headers.common.Authorization = auth.get();
    return config
}, error => {
    return Promise.reject(error);
    //TODO: Handle Request Errors...
})

/**
 * Response Interceptor
 */
instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status == config.rest.UNAUTHORIZED) {
        auth.clear();
        window.location.replace('/login');
    }
    return Promise.reject(error);
})

export default () => {
    return instance;
}