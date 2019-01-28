import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authAction from '../../redux/auth/actions';
import Signup from './signup/signup';
import Modal from '../../components/modal/modal';
import SignInForm from './signinForm';
import SignInStyleWrapper from './signin.style';
import { request } from '../../settings/index';
import { addToken, addCurrentPage } from '../../helpers/utility';
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
      loadingRegistrar: false,
      showRegistrar: false,
      inputCorreo: null,
      inputPassword: null,
      closingRegistrar: false,
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

  handleSignUp = (user) => {
    this.setState({loadingRegistrar: true});
    request.post('register', user)
      .then(response => {
        this.success('Te haz registrado con exito');
        this.setState({
          loadingRegistrar: false,
          showRegistrar: false,
        });
      })
      .catch(error => {
        this.setState({
          loadingRegistrar: false,
          showRegistrar: false,
        });
        this.error();
      });
  }

  showRegistrar = () => {
    this.setState((state) => ({ showRegistrar: !state.showRegistrar }));
  }

  closeRegistrar = () => {
    this.setState({
      showRegistrar: false,
      closingRegistrar: true,
    });
    setTimeout(() => {
      this.setState({ 
        closingRegistrar: false,
      });
    }, 500);
  }

  render() {
    const from = { pathname: '/dashboard' };
    const { 
      redirectToReferrer,
      accesoIncorrecto,
      loading,
      loadingRegistrar,
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
                RED SOCIAL
              </Link>
            </div>
            {
              (this.state.showRegistrar || this.state.closingRegistrar) &&
              <Modal
              visible={this.state.showRegistrar}
              onCancel={this.closeRegistrar}
              footer={null}
              >
                <Signup 
                handle={this.handleSignUp}
                loading={loadingRegistrar}
                />
              </Modal>
            }
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
