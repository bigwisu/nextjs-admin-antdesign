import {
  Layout
} from 'antd';

import SiderMenu from '../components/siderMenu';
import HeaderMenu from '../components/headerMenu';

const {
  Header, Content, Footer,
} = Layout;

export default ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <SiderMenu />
    <Layout>
      <HeaderMenu />
      <Content style={{ margin: '0 16px' }}>
        { children }
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          BigWisu
      </Footer>
    </Layout>
  </Layout>
);
