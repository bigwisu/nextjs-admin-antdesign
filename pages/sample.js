import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Breadcrumb
} from 'antd';

import Link from 'next/link';
import Page from '../layouts/main';

const FormItem = Form.Item;
const Option = Select.Option;

export default () => (
  <Page>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Sample</Breadcrumb.Item>
    </Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      <Form layout='horizontal'>
        <FormItem
          label='Input Number'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size='large'
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name='inputNumber'
          />
          <br />
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </FormItem>

        <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Switch defaultChecked name='switch' />
        </FormItem>

        <FormItem label='Slider' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem label='Select' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Select
            size='large'
            defaultValue='lucy'
            style={{ width: 192 }}
            name='select'
          >
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>
            disabled
            </Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label='DatePicker'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name='startDate' />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size='large' type='primary' htmlType='submit'>
          OK
          </Button>
          <Button size='large' style={{ marginLeft: 8 }}>
          Cancel
          </Button>
        </FormItem>

        <FormItem
          label='Input Number'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber
            size='large'
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name='inputNumber'
          />
          <br />
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </FormItem>

        <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Switch defaultChecked name='switch' />
        </FormItem>

        <FormItem label='Slider' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem label='Select' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Select
            size='large'
            defaultValue='lucy'
            style={{ width: 192 }}
            name='select'
          >
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>
            disabled
            </Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label='DatePicker'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name='startDate' />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size='large' type='primary' htmlType='submit'>
          OK
          </Button>
          <Button size='large' style={{ marginLeft: 8 }}>
          Cancel
          </Button>
        </FormItem>
      </Form>
    </div>
  </Page>
);
