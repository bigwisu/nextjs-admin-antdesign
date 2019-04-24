import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';

import Router from 'next/router';

import Amplify, { Auth } from 'aws-amplify';
import CognitoConfig from '../configs/cognito';

Amplify.configure(CognitoConfig);

const FormItem = Form.Item;

class LoginForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        const { username, password } = this.state
        Auth.signIn(username, password).then(()=>{
          Router.push('/')
        }).catch((response)=>{
          if (response.message){
            console.log(response.message)
            // this.setState({
            //   message: response.message
            // })
          }
        })

      }
    });
  };

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(()=>{
        Router.push('/')
      }).catch(()=>{
        // do nothing
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ padding: 250,
                    background: '#fff',
                    minHeight: 360,
                    display: 'flex',
                    justifyContent: 'center' }}>
                    {/* { console.log(process.env.COGNITO_IDENTITY_POOL_ID) } */}

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
                name='username'
                onChange={ this.handleChange.bind(this) }
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
                name='password'
                onChange={ this.handleChange.bind(this) }
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
