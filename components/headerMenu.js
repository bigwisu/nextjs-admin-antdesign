import {
  Layout, Menu, Icon
} from 'antd';

// import Amplify, { Auth } from 'aws-amplify';
// import CognitoConfig from '../configs/cognito';

// Amplify.configure(CognitoConfig);

import Router from 'next/router';

class HeaderMenu extends React.Component {
  state = {
    username: 'Username'
  };

  // componentWillMount = () => {
  //   Auth.currentAuthenticatedUser()
  //     .then(()=>{
  //       // do nothing
  //     }).catch(()=>{
  //       Router.push('/login')
  //     })
  // }

  handleLogOut = () => {
    Auth.signOut()
      .then(() => {
        Router.push('/login')
      })
      .catch((response) => {
        if (response.message){
          console.log(response.message)
        }
      })
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
            <Menu.Item onClick={() => this.handleLogOut()} >
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
