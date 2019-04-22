import Head from 'next/head';
import React from 'react';
import {
  Breadcrumb,
} from 'antd';

import Page from '../layouts/main';

export default () => (
  <React.Fragment>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Page>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        Dashboard page with global styles!
      </div>
    </Page>
  </React.Fragment>
);
