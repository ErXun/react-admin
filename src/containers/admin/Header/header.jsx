import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'  // 非路由组件使用路由api
import screenfull from 'screenfull'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import { deleteUserInfoAction } from '../../../redux/actions/login_action'
import './header.less'

@connect(state => ({ userInfo: state.userInfo }), {
  deleteUserInfo: deleteUserInfoAction
})
@withRouter

class Header extends Component {
  state = {
    isFullScreen: false
  }

  logout = () => {
    // store.dispatch(deleteUserInfoAction())
    this.props.deleteUserInfo()
  }

  fullscreen = () => {
    screenfull.toggle();
  }

  componentDidMount() {
    screenfull.on('change', () => {
      let isFullScreen = !this.state.isFullScreen
      this.setState({
        isFullScreen
      })
    });
  }


  render() {
    const { user } = this.props.userInfo
    const { pathname } = this.props.location
    const { isFullScreen } = this.state
    return (
      <div className="header">
        <span className="sider-name">{pathname}</span>
        <Button size="small" onClick={this.fullscreen}>
          <FullscreenOutlined style={{ display: isFullScreen ? 'none' : 'block' }} />
          <FullscreenExitOutlined style={{ display: isFullScreen ? 'block' : 'none' }} />
        </Button>
        <span className="username">欢迎，{user.username}</span>
        <Button type="link" onClick={this.logout}> 退出登录</Button>
      </div>
    )
  }
}
export default Header
