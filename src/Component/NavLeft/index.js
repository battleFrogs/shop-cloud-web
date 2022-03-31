import React, {Component} from 'react';
import './index.less'
import {Menu} from "antd";
import menuConfig from "../../Constant/MenuConfig";
import {NavLink} from "react-router-dom";

const {SubMenu} = Menu;

class NavLeft extends Component {

    // 获取左边栏数据
    getNavLeftOption = (menuConfig) => {
        let result = [];
        menuConfig.forEach(res => {
            if (!res.children) {
                result.push(<Menu.Item key={res.key}>
                    <NavLink to={res.url}>{res.name}</NavLink>
                </Menu.Item>);
            } else {

                let result1 = [];
                res.children.forEach(r => {
                    result1.push(<Menu.Item key={r.key}>
                        <NavLink to={r.url}>{r.name}</NavLink>
                    </Menu.Item>);
                });

                result.push(<SubMenu key={res.key} title={res.name}>
                    {result1}
                </SubMenu>);
            }
        });
        return <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {result}
        </Menu>;
    };

    componentWillMount() {
        const result = this.getNavLeftOption(menuConfig);
        this.setState({
            menuTreeNode: result
        });
    }

    render() {
        return (
            <div>
                <div className="logo"/>
                {this.state.menuTreeNode}
            </div>
        );
    }
}

export default NavLeft;