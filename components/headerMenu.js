import {
  Layout, Menu, Icon
} from 'antd';

class HeaderMenu extends React.Component {
  state = {
    username: 'Username'
  };

  componentDidMount = () => {
    console.log('USERMENU LOADED')
  }

  render() {
    return (
      <Layout.Header style={{ padding: 0 }} >
        <Menu
          theme="light"
          mode="horizontal"
        >
          <Menu.SubMenu
            title={<span><Icon type="user" /><span>{this.state.username}</span></span>}
            style={{
              float:'right',
              justifyContent:"space-around",
              alignItems:'center'
            }}>
            <Menu.Item>
              <Icon type="logout" />
              <span>Logout</span>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>
    )
  }
}

export default HeaderMenu;
