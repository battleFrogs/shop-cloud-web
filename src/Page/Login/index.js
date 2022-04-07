import React, { Component } from 'react';
import { Form, Input, Row, Button, Divider, Col } from 'antd';
import './index.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import service from '../../Component/Axios/requestService';
import apiurl from "../../Requests/system";
import withRouter from "../../Component/Axios/withRouter"





class Login extends Component {

    login = (values) => {
        const { username, password } = values
        service.postJson(apiurl.login, { userName: username, password })
            .then(res => {
                this.props.history.push(`/home/goods/goodsDetail`);
            })
            .catch(err => {
                console.log(err);
            });
    }

    onFinish = (values) => {

        this.login(values)

    };

    render() {
        return (
            <div className='login-background'>
                <div className='login-window'>
                    <h2 style={{ margin: "15px 15px 20px" }}>
                        用户登录
                    </h2>
                    <Divider></Divider>

                    <div style={{ marginTop: 40 }}>
                        <Form
                            labelCol={{ span: 7 }}
                            wrapperCol={{ span: 12 }}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            autoComplete="off"
                            style={{ marginTop: 15 }}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                                wrapperCol={{ offset: 2, span: 20 }}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                                wrapperCol={{ offset: 2, span: 20 }}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入密码"

                                />
                            </Form.Item>
                            <div style={{ height: 15 }}></div>


                            <Form.Item wrapperCol={{ offset: 2, span: 20 }}>
                                <Button type="primary" htmlType="submit" style={{ width: 350, height: 36 }}>
                                    登录
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>

                    <Row>
                        <Col offset={2} span={5}>
                            <a href='#'>注册用户</a>
                        </Col>
                        <Col offset={12} span={5}>
                            <a href='#'>忘记密码</a>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }
}

// export default withRouter(Login);
export default withRouter(Login);