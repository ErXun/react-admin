import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'  // 非路由组件使用路由api
import './leftMenu.less'
import leftMenu from '../../config/leftMenu';



const { SubMenu, Item } = Menu;

@withRouter
class LeftMenu extends Component {
  // 创建菜单
  createMenu = (target) => {
    return target.map(item => {
      if (!item.children) {
        return (
          <Item key={item.key} icon={item.icon}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </Item>
        )
      } else {
        return (
          <SubMenu key={item.key} title={
            <span>{item.title}</span>
          } icon={item.icon}>
            {
              this.createMenu(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  render() {
    const { pathname } = this.props.location
    return (
      <div className="left-menu">
        <h1 className="title">哎，我就是玩！</h1>
        <Menu
          defaultSelectedKeys={[pathname.split('/').reverse()[0]]}
          defaultOpenKeys={pathname.split('/').splice(2)}
          mode="inline"
          theme="dark"
        >
          {
            this.createMenu(leftMenu)
          }
        </Menu>
      </div>
    );
  }
}

export default LeftMenu;
