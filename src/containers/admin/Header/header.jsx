import React, { Component } from 'react'
import { Button } from 'antd'
import screenfull from 'screenfull'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import store from '@/redux/store'
import { deleteUserInfoAction } from '../../../redux/actions/login_action'
import './header.less'


export default class Header extends Component {

  state = {
    isFullScreen: false
  }

  logout = () => {
    store.dispatch(deleteUserInfoAction())
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

    const { isFullScreen } = this.state
    return (
      <div className="header">
        <Button size="small" onClick={this.fullscreen}>
          <FullscreenOutlined style={{ display: isFullScreen ? 'none' : 'block' }} />
          <FullscreenExitOutlined style={{ display: isFullScreen ? 'block' : 'none' }} />
        </Button>
        <span className="username">欢迎，贰旬</span>
        <Button type="link" onClick={this.logout}> 退出登录</Button>
      </div>
    )
  }
}
