import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import { deleteUserInfoAction } from '../../redux/actions/login_action';
import MyHeader from './Header/header'
import './admin.less'


const { Sider, Content } = Layout;



/**
 * ES6装饰器，decorator
 */
@connect(state => ({ userInfo: state.userInfo }), {
  deleteUserInfo: deleteUserInfoAction
})

class Admin extends Component {
  componentDidMount() {
    console.log(`this.props`, this.props)
  }
  logout = () => {
    this.props.deleteUserInfo()
  }
  render() {
    const { user, isLogin } = this.props.userInfo
    if (!isLogin) {
      return <Redirect to="/login" />
    } else {
      return (
        <Layout className="admin">
          <Sider className="sider">Sider</Sider>
          <Layout>
            <MyHeader />
            <Content className="content">Content</Content>
          </Layout>
        </Layout>
      )
    }

  }
}

export default Admin

// export default connect(state => ({ userInfo: state.userInfo }), {
//   deleteUserInfo: deleteUserInfoAction
// })(Admin)
