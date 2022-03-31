import React, {Component} from 'react';
import './index.less';
import {Layout} from "antd";

const {Header} = Layout;

class Headers extends Component {
    render() {
        return (
            <div>
                <Header className="site-layout-background" style={{padding: 0}}/>
            </div>
        );
    }
}

export default Headers;