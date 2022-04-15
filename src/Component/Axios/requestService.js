import { message, notification } from "antd";
import axios from "axios";
import qs from 'qs'

import history from "./history";


// 实例化对象
const service = axios.create({
    timeout: 40000,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
});


const urlprefixInfo = {
    "localhost": "http://localhost:9000"
}

const urlprefix = "http://localhost:9000"


// 添加请求前拦截器
service.interceptors.request.use(config => {
    if (sessionStorage.getItem("token")) {
        config.headers['Auth-Token'] = sessionStorage.getItem("token")
    }
    return config
}, function (error) {
    return Promise.reject(error)
});

// 添加请求的响应拦截器
service.interceptors.response.use(res => {
    return res;
}, error => {
    // 请求的状态码为401的时候的跳转处理
    if (error.response?.status === 401) {
        sessionStorage.clear();
        history.push("/");
    }
    return Promise.reject(error);
})


// 对请求业务结果的通用处理
function responseReturn(resolve, reject, res) {

    // 请求的业务码为401的时候的跳转处理
    if (res.data.code === 401) {
        sessionStorage.clear();
        history.push("/");
        return reject;
    }

    if (res.data.code === 200) {
        // 请求的业务码正常则返回数据
        resolve(res.data.data);
    } else {
        // 请求的业务码错误则抛出提示
        message.error(res.data.msg)
    }
}


// 对请求错误的问题
function responseErrorReturn(err) {

    notification.error({
        message: "请求接口问题",
        description: err.message,
        duration: 2
    })
}


export default {

    // get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "GET",
                url: urlprefix + url,
                params: param,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            }).then(res => {
                console.log(res)
                responseReturn(resolve, reject, res);
            }).catch(err => {
                responseErrorReturn(err)
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
                },
                url: urlprefix + url,
                data
            }).then(res => {
                responseReturn(resolve, reject, res);
            }).catch(err => {
                responseErrorReturn(err)
            })
        })
    },

    // post FormData 请求
    postFormData(url, param) {
        let data = new FormData()
        console.log(param)
        for (let i in param) {
            data.append(i, param[i])
        }

        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                },
                url: urlprefix + url,
                data
            }).then(res => {
                responseReturn(resolve, reject, res);
            }).catch(err => {
                reject(err.message);
            });
        });
    },


    // post formData 文件上传
    uploadFile(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: "POST",
                url: urlprefix + url,
                data: param,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
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
                },
                url: urlprefix + url,
                crossdomain: true,
                data: qs.stringify(param)
            })
                .then(res => {
                    responseReturn(resolve, reject, res);
                })
                .catch(err => {
                    reject(err.message);
                });
        });
    }
}