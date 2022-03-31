import React, {Component} from 'react';
import './App.less';
import {Layout} from "antd";
import NavLeft from "./Component/NavLeft";

import Headers from "./Component/Headers";
import Footers from './Component/Footers'

const {Sider, Content} = Layout;

class App extends Component {


    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider>
                    <NavLeft/>
                </Sider>
                <Layout className="site-layout">
                    <Headers/>
                    <Content style={{margin: '0 16px'}}>
                        <div style={{margin: '16px 0'}}>
                        </div>
                        <div className="site-layout-background" style={{padding: 24, minHeight: "75vh"}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footers/>
                </Layout>
            </Layout>
        );
    }
}

export default App;