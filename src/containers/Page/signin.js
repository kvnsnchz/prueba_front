import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import SignInForm from './signinForm';
import SignInStyleWrapper from './signin.style';
import { request } from '../../settings/index';
import { addToken, getToken, addCurrentPage } from '../../helpers/utility';
import message from "../../components/feedback/message";
import MessageContent from "../../components/feedback/messageContent.style";

const { login } = authAction;

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToReferrer: false,
      accesoIncorrecto: false,
      loading: false,
      showRegistrar: false,
      inputCorreo: null,
      inputPassword: null,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  success = (text) => {
    message.success(
        <MessageContent>
           {text}
        </MessageContent>,
        2
    );
  };

  error = (mensaje) => {
    const msj = mensaje || 'Ocurrio un error';
    message.error(
        <MessageContent>
           {msj}
        </MessageContent>,
        2
    );
  };

  loginSuccess = (token, id) => {
    const { login } = this.props;
    addToken(token, true, id);
    addCurrentPage('principal');
    login();
    this.props.history.push('/dashboard');
  }

  handleLogin = () => {
    const user = {
      email: this.state.inputCorreo,
      password: this.state.inputPassword,
    };
    this.setState({
      loading: true,
      accesoIncorrecto: false,
      noVerificado: false,
    });
    request.post('login', user)
      .then(response => {
        this.setState({loading: false});
        const data = response.data;
        this.loginSuccess(data.token, data.user.id);
      })
      .catch(error => {
        this.setState({loading: false});
        if(error.response && error.response.status === 401) {
          this.setState({accesoIncorrecto: true});
        }
        else{
          this.error();
        }
      });
  }

  handleInput = (e, key) => {
    switch(key) {
      case 'correo': 
        this.setState({inputCorreo: e.target.value,});
      break;
      default:
        this.setState({inputPassword: e.target.value,});
      break;
    }
    
  }

  showRegistrar = () => {
    this.setState((state) => ({ showRegistrar: !state.showRegistrar }));
  }

  render() {
    const from = { pathname: '/dashboard' };
    const { 
      redirectToReferrer,
      accesoIncorrecto,
      loading,
    } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <SignInForm 
              handleLogin={this.handleLogin}
              handleInput={this.handleInput}
              showRegistrar={this.showRegistrar}
              accesoIncorrecto={accesoIncorrecto}
              loading={loading}
              />
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false
  }),
  { login }
)(SignIn);
