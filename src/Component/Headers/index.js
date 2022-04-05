import React, {Component} from 'react';
import './index.less';
import {Avatar, Layout} from "antd";
import {UserOutlined} from "@ant-design/icons"

const {Header} = Layout;

class Headers extends Component {
    render() {
        return (
            <div>
                <Header className="site-layout-background" style={{padding: 0}}>
                    <div style={{display: "flex", justifyContent: "flex-end", padding: "15px 20px"}}>
                        <Avatar icon={<UserOutlined />} />
                    </div>
                </Header>
            </div>
        );
    }
}

export default Headers;