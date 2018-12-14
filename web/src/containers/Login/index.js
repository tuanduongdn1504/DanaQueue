import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'antd';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import { login as loginAction } from '../../redux/login/actions';
import IntlMessages from '../../components/utility/IntlMessages';
import SignInStyleWrapper from './style';
import AppLogo from '../../assets/images/logo-color.svg';

const FormItem = Form.Item;

class SignIn extends Component {
  constructor(props) {
    const { isAuthenticated } = props;
    super(props);
    this.state = {
      redirectToReferrer: isAuthenticated
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = this.props;
    if (
      isAuthenticated !== nextProps.isAuthenticated &&
      nextProps.isAuthenticated === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleLogin = e => {
    e.preventDefault();
    const { form, login } = this.props;
    form.validateFields((err, values) => {
      if (!err && values) {
        const { username, password } = values;
        login(username, password);
      }
    });
  };

  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <img src={AppLogo} alt="DanaQueue" width="40%" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <Form onSubmit={this.handleLogin}>
                <div className="isoInputWrapper">
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: <IntlMessages id="auth.username.message" />
                        }
                      ]
                    })(<Input placeholder="Vui lòng nhập username" />)}
                  </FormItem>
                </div>

                <div className="isoInputWrapper">
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: <IntlMessages id="auth.password.message" />
                        }
                      ]
                    })(
                      <Input
                        type="password"
                        placeholder="Vui lòng nhập mật khẩu"
                      />
                    )}
                  </FormItem>
                </div>

                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleLogin}
                  >
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>
              </Form>
              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func,
  form: PropTypes.object
};

const WrappedSignInForm = Form.create()(SignIn);

export default connect(
  state => ({
    isAuthenticated: state.login.isAuthenticated
  }),
  dispatch => ({
    login: (username, password) => {
      dispatch(loginAction(username, password));
    }
  })
)(WrappedSignInForm);
