import React, {Component} from 'react';
import './index.less'
import {Layout} from "antd";

const {Footer} = Layout;

class Footers extends Component {
    render() {
        return (
            <div>
                <Footer style={{textAlign: 'center'}}>最终解释权归gjc 所有</Footer>
            </div>
        );
    }
}

export default Footers;