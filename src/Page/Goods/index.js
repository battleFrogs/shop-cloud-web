import React, { Component } from 'react';
import "./index.less";
import Input from "antd/es/input";
import { Button, Col, Form, InputNumber, Modal, Row, Table, Tag, Image } from "antd";
import service from "../../Component/Axios/requestService"
import datasourceKey from '../../utils/datasourceKey'


const { TextArea } = Input;


class Goods extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false, // 新增弹窗是否显示
            goodsName: "", // 商品输入名称
            goodsPrice: "", // 商品输入价格
            goodsData: [] // 商品请求数据
        }
    }

    // 获取数据
    getData = () => {
        let goodsName = this.state.goodsName;
        let goodsPrice = this.state.goodsPrice;

        let param = {};
        if (goodsPrice) {
            param['goodsPrice'] = goodsPrice;
        }
        if (goodsName) {
            param['goodsName'] = goodsName;
        }

        service.get("/goods/getGoods", param)
            .then(res => {
                console.log(res.goodsInfoList)
                this.setState({
                    goodsData: res.goodsInfoList
                })
            })
    };

    // 修改商品名称
    changeGoodsName = (e) => {
        this.setState({
            goodsName: e.target.value
        })
    };

    // 修改商品价格
    changeGoodsPrice = (e) => {
        this.setState({
            goodsPrice: e.target.value
        })
    };

    // 搜索
    searchInfo = () => {
        this.getData();
    };

    // 清空
    clearInfo = () => {
        this.setState({
            goodsName: "",
            goodsPrice: ""
        });
    };

    // 新增数据
    insertInfo = () => {
        this.setState({
            isModalVisible: true,
        })
    };

    closeModal = () => {
        this.setState({
            isModalVisible: false,
        })
    }

    onFinish = (values) => {
        console.log(values);
    }


    componentWillMount() {
        this.getData();
    }


    downSelf = (record) => {

        

    }

    render() {


        const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 15 },
        };
        const validateMessages = {
            required: '${label} 不能为空',
            number: {
                range: '${label} 价格必须在 ${min} and ${max} 之间',
            },
        };

        const columns = [
            {
                title: '商品名称',
                dataIndex: 'goodsName',
                key: 'goodsName',
            },
            {
                title: '商品图片',
                dataIndex: 'goodsImage',
                key: 'goodsImage',
                render: res => {
                    return <Image
                        width={80}
                        placeholder={<Image
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            width={200}
                        />}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                }
            },

            {
                title: '商品价格',
                dataIndex: 'goodsPrice',
                key: 'goodsPrice',
            },
            {
                title: '商品描述',
                dataIndex: 'goodsDescription',
                key: 'goodsDescription',
            },
            {
                title: '是否上架',
                key: 'onSelf',
                dataIndex: 'onSelf',
                render: res => {
                    if (res === "ON") {
                        return <span>上架中</span>;
                    } else {
                        return <span>已下架</span>;
                    }
                },
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {

                    console.log(text)
                    let buttonText
                    if (record.onSelf === "ON") {
                        buttonText = <React.Fragment><Button type="primary" onClick={() => this.downSelf(record)}>下架</Button><span style={{ marginRight: 10 }} /></React.Fragment>
                    } else {
                        buttonText = <React.Fragment><Button type="primary">编辑</Button><span style={{ marginRight: 10 }} /></React.Fragment>
                    }
                    return (<React.Fragment>
                        {buttonText}
                        <Button type="ghost">删除</Button>
                    </React.Fragment>);


                },
            },
        ];


        return (
            <div>
                <Row style={{ lineHeight: 3 }}>
                    <Col span={1}>
                        <span>商品名称:</span>
                    </Col>
                    <Col span={3}>
                        <Input placeholder="商品名称"
                            onChange={this.changeGoodsName} value={this.state.goodsName} />
                    </Col>
                    <span style={{ marginRight: 13 }} />
                    <Col span={1}>
                        <span>商品价格:</span>
                    </Col>
                    <Col span={3}>
                        <Input placeholder="商品价格"
                            onChange={this.changeGoodsPrice} value={this.state.goodsPrice} />
                    </Col>
                    <span style={{ marginRight: 13 }} />
                    <Col span={1}>
                        <Button type="primary" onClick={this.searchInfo}>搜索</Button>
                    </Col>
                    <Col span={1}>
                        <Button type="ghost" onClick={this.clearInfo}>清空</Button>
                    </Col>
                    <Col span={1}>
                        <Button type="primary" danger onClick={this.insertInfo}>新增</Button>
                        <Modal title="新增商品" footer={null} visible={this.state.isModalVisible}
                            onCancel={this.closeModal}>
                            <Form {...layout} name="nest-messages" onFinish={this.onFinish}
                                validateMessages={validateMessages}>
                                <Form.Item name={['goods', 'name']} label="商品名称"
                                    rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['goods', 'age']} label="商品价格"
                                    rules={[{ required: true, type: 'number', min: 0, max: 99 }]}>
                                    <InputNumber />
                                </Form.Item>
                                <Form.Item name={['goods', 'description']} label="商品描述">
                                    <TextArea rows={4} maxLength={30} showCount />
                                </Form.Item>

                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
                <div style={{ marginTop: 20 }} />
                <div>
                    <Table columns={columns} dataSource={datasourceKey.setKey(this.state.goodsData)}
                        pagination={{ pageSize: 10, current: 2, total: 30 }} scroll={{ y: 550 }} />
                </div>
            </div>
        );
    }
}

export default Goods;