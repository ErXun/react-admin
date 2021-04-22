import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import { deleteUserInfoAction } from '../../redux/actions/login_action';
import MyHeader from './Header/header'
import './admin.less'
import Home from '../home/Home';
import Role from '../role/Role'
import User from '../user/User'
import LeftMenu from '../leftMenu/LeftMenu';
import Category from '../product/category/Category';



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
    const { isLogin } = this.props.userInfo
    if (!isLogin) {
      return <Redirect to="/login" />
    } else {
      return (
        <Layout className="admin">
          <Sider className="sider">
            <LeftMenu />
          </Sider>
          <Layout>
            <MyHeader />
            <Content className="content">
              <Switch>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/role" component={Role} />
                <Route path="/admin/user" component={User} />
                <Route path="/admin/product/category" component={Category} />
                <Redirect to="/admin/home" />
              </Switch>
            </Content>
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
