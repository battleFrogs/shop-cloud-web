import axios from "axios";


// 实例化对象
const service = axios.create({
    timeout: 40000,
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
});

// 添加请求拦截器
service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //     config.headers['TOKEN'] = getCookie('TOKEN')
    // }
    config.headers["Auth-Token"] = "eyJhbGciOiJIUzUx" +
        "MiJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiZ2pjIiwicmFuZG9" +
        "tU3RyaW5nIjoid2dycjNiNWs0cyJ9.3mWif_y3h2W2niuCO0k9kkKwiuOC" +
        "EzIB5RCe0WoQbDKKcS_UasbT7yvR2ykwwRMowd85eQpY7me-9A7r_dGC3A";
    return config
}, function (error) {
    return Promise.reject(error)
});


// 对请求结果的通用处理
function responseReturn(resolve, reject, res) {
    if (res.data.code === 200) {
        resolve(res.data.data);
    } else {
        reject(res.data.msg)
    }
}


export default {

    // get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "GET",
                url,
                params: param,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "token": sessionStorage.getItem('token')
                },
            }).then(res => {
                responseReturn(resolve, reject, res);
            }).catch(err => {
                reject(err.message);
            })
        })
    },

    // post Json请求
    postJson(url, data) {
        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "token": sessionStorage.getItem('token')
                },
                url,
                data
            }).then(res => {
                responseReturn(resolve, reject, res);
            }).catch(err => {
                reject(err.message);
            })
        })
    },

    // post FormData 请求
    postFormData(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                    "token": sessionStorage.getItem('token')
                },
                url,
                data: param
            }).then(res => {
                responseReturn(resolve, reject, res);
            }).catch(err => {
                reject(err.message);
            });
        });
    },


    uploadFile(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                url,
                data: param,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                    "token": sessionStorage.getItem('token')
                },
            })
                .then(res => {
                    responseReturn(resolve, reject, res);
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    },


    postForUrl(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "token": sessionStorage.getItem('token')
                },
                url,
                crossdomain: true,
                params: param
            })
                .then(res => {
                    responseReturn(resolve, reject);
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }
}