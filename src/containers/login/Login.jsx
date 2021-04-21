import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { saveUserInfoAction } from '../../redux/actions/login_action';
import { reqLogin } from '@/api'
import './login.less'
import icon from '../../assets/icon.png'


@connect(state => ({ isLogin: state.userInfo.isLogin }), {
  saveUserInfo: saveUserInfoAction
})

class Login extends Component {
  render() {
    const onLogin = async (values) => {
      let result = await reqLogin(values)
      const { status, msg, data } = result
      if (status === 0) {
        this.props.saveUserInfo({
          user: data,
          token: data.password
        })
        // 页面跳转
        this.props.history.replace('/admin')
      } else {
        message.warning(msg, 1)
      }
    };
    const { isLogin } = this.props
    if (isLogin) {
      return <Redirect to="/admin" />
    }
    return (
      <div id="login">
        <header>
          <img src={icon} alt="logo" />
          <h1>XXX-YYY</h1>
        </header>
        <div className="login-action">
          <h1>用户登录</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onLogin}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login


// export default connect(state => ({ isLogin: state.userInfo.isLogin }), {
//   saveUserInfo: saveUserInfoAction
// })(Login)
