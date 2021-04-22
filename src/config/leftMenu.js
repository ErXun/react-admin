import {
  HomeOutlined,
  UserOutlined,
  MenuFoldOutlined,
  ContainerOutlined,
  MacCommandOutlined,
} from '@ant-design/icons';

const arr = [{
  title: '首页',
  key: 'home',
  icon: <HomeOutlined />,
  path: '/admin/home'
}, {
  title: '商品',
  key: 'product',
  icon: <ContainerOutlined />,
  children: [{
    title: '分类管理',
    key: 'category',
    icon: <MacCommandOutlined />,
    path: '/admin/product/category'
  }]
},
{
  title: '用户管理',
  key: 'user',
  icon: <UserOutlined />,
  path: '/admin/user'
},
{
  title: '角色管理',
  key: 'role',
  icon: <MenuFoldOutlined />,
  path: '/admin/role'
},
]


export default arr