import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {

  checkUsername = (rule, value, callback) => {
    const form = this.props.form;
    // form.setFields({
    //   username: {
    //     value: ""
    //   }
    // });
    // form.setFieldsValue("pedro, manada");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ padding: 250,
                    background: '#fff',
                    minHeight: 360,
                    display: 'flex',
                    justifyContent: 'center' }}>

        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px'}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' },
                { validator: this.checkUsername }
              ]
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false
            })(<Checkbox>Remember me</Checkbox>)}
            <a href="" style={{float: 'right'}}>
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              style={{width: '100%'}}>
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
