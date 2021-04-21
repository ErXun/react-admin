import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { deleteUserInfoAction } from '../../redux/actions/login_action';


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
        <div>
          Admin,{user.username}
          <Button onClick={this.logout}>退出登录</Button>
        </div>
      )
    }

  }
}

export default Admin

// export default connect(state => ({ userInfo: state.userInfo }), {
//   deleteUserInfo: deleteUserInfoAction
// })(Admin)
