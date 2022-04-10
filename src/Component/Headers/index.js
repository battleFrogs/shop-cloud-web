import React, { Component } from 'react';
import './index.less';
import { Avatar, Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons"
import withRouter from "../../Component/Axios/withRouter"

const { Header } = Layout;

class Headers extends Component {


    


    exit = () => {
        sessionStorage.clear();
        this.props.history.push(`/`);
    }


    render() {

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" onClick={this.exit}>
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        );


        return (
            <div>
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "15px 40px" }}>

                        <Dropdown overlay={menu} placement="bottom" arrow>
                            <Avatar icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </Header>
            </div>
        );
    }
}

export default withRouter(Headers);