import React, {Component} from 'react';
import "./index.less";
import Input from "antd/es/input";
import {Button, Col, Row, Space, Table, Tag} from "antd";
import axios from "axios";

class Goods extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            goodsName: "",
            goodsPrice: "",
            goodsData: []
        }
    }

    // 获取数据
    getData = () => {
        axios.post(
            "http://localhost:9001/test", {},
        ).then((res) => {
            this.setState({
                goodsData: res.data
            })
            console.log(this.state.goodsData)
        });

    }

    componentWillMount() {
        this.getData();
    }


    render() {

        const columns = [
            {
                title: '商品名称',
                dataIndex: 'goodsName',
                key: 'goodsName',
            },
            {
                title: '商品价格',
                dataIndex: 'goodsPrice',
                key: 'goodsPrice',
            },
            {
                title: '商品描述',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: '是否上架',
                key: 'onSelf',
                dataIndex: 'onSelf',
                render: res => {
                    if (res === 1) {
                        return <span>上架</span>;
                    } else {
                        return <span>下架</span>;
                    }
                },
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <>
                        <Button type="primary">下架</Button>
                        <span style={{marginRight: 10}}/>
                        <Button type="ghost">删除</Button>
                    </>
                ),
            },
        ];


        return (
            <div>
                <Row style={{lineHeight: 3}}>
                    <Col span={1}>
                        <span>商品名称:</span>
                    </Col>
                    <Col span={3}>
                        <Input placeholder="商品名称" value={this.state.goodsName}/>
                    </Col>
                    <span style={{marginRight: 13}}/>
                    <Col span={1}>
                        <span>商品价格:</span>
                    </Col>
                    <Col span={3}>
                        <Input placeholder="商品价格" value={this.state.goodsPrice}/>
                    </Col>
                    <span style={{marginRight: 13}}/>
                    <Col span={1}>
                        <Button type="primary">搜索</Button>
                    </Col>
                    <Col span={1}>
                        <Button type="ghost">清空</Button>
                    </Col>
                </Row>
                <div style={{marginTop: 20}}/>
                <div>
                    <Table columns={columns} dataSource={this.state.goodsData}/>
                </div>
            </div>
        );
    }
}

export default Goods;