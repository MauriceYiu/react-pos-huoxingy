/* eslint-disable */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import './login.scss';
import { login } from './../../api/login/index';

const FormItem = Form.Item;
const error = errInfo => {
    message.error(errInfo);
};


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showStoreList: false,
            storeList: []
        };
        this.selStore = this.selStore.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (!(/^1[3|4|5|7|8|9][0-9]{9}$/.test(values.phone))) {
                    error('手机号码格式不正确');
                    return;
                }
                let data = {
                    "username": values.phone,
                    "password": values.password
                }

                let authStr = 'Basic ' + Base64.encode(data.username + ':' + data.password);

                login(data).then(res => {
                    if (res) {
                        this.setState({
                            showStoreList: true,
                            storeList: res
                        })
                        sessionStorage.setItem('token', authStr);
                    }
                });
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            < div id="login" >
                {
                    this.state.showStoreList ? (
                        <div className="choose-store">
                            <div className="inner">
                                <ul>
                                    {
                                        this.state.storeList.map((item, index) => {
                                            return (
                                                <li key={index} onClick={() => { this.selStore(item) }}>
                                                    {item.storeName}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    ) : (
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入您的手机号!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入您的密码!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem>
                                    <a className="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                    或者 <a href="">立即注册!</a>
                                </FormItem>
                            </Form>
                        )
                }

            </div>
        );
    }
    componentDidMount() {
        sessionStorage.clear();
    }
    componentDidUpdate() {
        if (this.state.showStoreList) {
            new IScroll('.inner');
        }
    }
    selStore(item) {
        sessionStorage.setItem('storeInfo', JSON.stringify(item));
        this.props.router.push('/index');
    }
}
Login = Form.create()(Login);

export default Login;