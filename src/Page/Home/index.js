import React, { Component } from 'react';
import { Button, message, Upload } from 'antd';
import UploadOutlined from '@ant-design/icons';
import request from '../../Component/Axios/requestService';
import './index.less';


class Home extends Component {


    postFormData = () => {
        request.postFormData("/test11", { name: "gjc", age: "age" }).then(res => {
            message.success("成功")
        }).catch(err => {
            message.error("失败")
        })
    }

    postForUrl = () => {
        request.postForUrl("/test11", { name: "gjc", age: "age" }).then(res => {
            message.success("成功")
        }).catch(err => {
            message.error("失败")
        })
    }

    postForUpload = () => {

    }


    render() {

        const paramInfo = {
            name: 'file',
            action: 'http://localhost:9001/test22',
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }

        return (
            <div>
                <h1>首页展示</h1>
                <Button type='primary' onClick={this.postForUrl}>按钮</Button>
                <div style={{marginTop:20}}></div>
                <Upload {...paramInfo}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>,
            </div>

        );
    }
}

export default Home;