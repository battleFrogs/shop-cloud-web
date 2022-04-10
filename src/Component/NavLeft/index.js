import * as Icon from "@ant-design/icons";
import React, { Component } from 'react';
import './index.less'
import { Menu } from "antd";
import menuConfig from "../../Constant/MenuConfig";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

class NavLeft extends Component {

    state = {
        current: '2',
    }

    // 获取左边栏数据
    getNavLeftOption = (menuConfig) => {
        return menuConfig.map(res => {
            if (res.children) {
                return (<SubMenu key={res.key} title={res.name} icon={React.createElement(Icon[res.icon])}>
                    {this.getNavLeftOption(res.children)}
                </SubMenu>);
            } else {
                return <Menu.Item key={res.key} icon={React.createElement(Icon[res.icon])}>
                    <NavLink to={res.url}>{res.name}</NavLink>
                </Menu.Item>
            }
        });
    };

    // 对左边栏数据的封装
    componentWillMount() {
        const key = sessionStorage.getItem("menuItem");
        const result = this.getNavLeftOption(menuConfig);
        this.setState({
            menuTreeNode: result,
            current: key ? key : this.state.current
        });
    }


    handleClick = e => {
        // 暂存menuItem的值
        sessionStorage.setItem("menuItem", e.key)
        this.setState({
            current: e.key,
        });
    };


    render() {
        return (
            <div>
                <div className="logo" />
                <Menu theme="dark" mode="inline" onClick={this.handleClick} defaultOpenKeys={['1', '3', '6']} selectedKeys={this.state.current}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;