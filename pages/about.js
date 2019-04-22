import Head from 'next/head';
import React from 'react';
import {
  Breadcrumb,
} from 'antd';

import Page from '../layouts/main';

export default () => (
  <React.Fragment>
    <Head>
      <title>About</title>
    </Head>
    <Page>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        <p>This is the about page</p>
      </div>
    </Page>
  </React.Fragment>
);
