import {
    Layout, Menu, Icon,
  } from 'antd';

import AppLogo from '../assets/appLogo'
import Router from 'next/router';

const {
  Sider,
} = Layout;

const SubMenu = Menu.SubMenu;

class SiderMenu extends React.Component {
  state = {
    collapsed: false,
    selectedKey: ''
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  //bukannya seharusnya component did update?.. tapi justu bisanya did mount :-/
  componentDidMount = () => {
    const pathname = Router.pathname
    this.setState({
      selectedKey: pathname
    })
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div style={{margin: '19px auto 19px', width: 142}}>
          <AppLogo />
        </div>
        <Menu theme="dark"
          defaultSelectedKeys={['/']}
          selectedKeys={[this.state.selectedKey]}
          mode="inline"
        >
          <Menu.Item key="/" onClick={() => Router.push('/')}>
            <Icon type="pie-chart" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="/about" onClick={() => Router.push('/about')}>
            <Icon type="desktop" />
            <span>About</span>
          </Menu.Item>
          <Menu.Item key="/sample" onClick={() => Router.push('/sample')}>
            <Icon type="ant-design" />
            <span>Sample</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;
