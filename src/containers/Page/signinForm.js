import React, { Component } from 'react';
import { Input } from 'antd';
import Button from '../../components/uielements/button';
import { Link } from 'react-router-dom';
import Form from '../../components/uielements/form';

const FormItem = Form.Item;

class SignInForm extends Component {
    
    render() {
        const { 
            handleLogin, 
            handleInput, 
            showRegistrar,
            accesoIncorrecto,
            loading, 
        } = this.props;
        const { getFieldDecorator } = this.props.form;
        
        const handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                handleLogin();
              }
            });
        }

        return (
            <div className="isoSignInForm">
                <Form onSubmit={handleSubmit}>
                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('email', {
                            rules: [
                                {
                                type: 'email',
                                message: 'El correo electronico no es valido',
                                },
                                {
                                required: true,
                                message: 'Por favor ingresa el correo electronico',
                                },
                            ],
                            })(
                            <Input 
                            name='email'
                            id='email'
                            size="large"
                            placeholder="Correo electronico"
                            onChange={(e) => handleInput(e, 'correo')}
                            />)}
                        </FormItem>
                    </div>

                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Por favor ingresa la contraseña',
                                },
                                ],
                            })(
                            <Input 
                            size="large" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={(e) => handleInput(e, 'password')} 
                            />)}
                        </FormItem>
                    </div>

                    <div className="botonWrapper">
                        <div className="isoHelperWrapper">
                            <Link to="# " className="isoSignUp" onClick={showRegistrar}>
                                Registrate
                            </Link>
                        </div>
                        <FormItem>
                            <Button
                            type="primary"
                            id="btnSignIn"
                            htmlType="submit"
                            loading={loading}
                            >
                                Iniciar Sesión
                            </Button>
                        </FormItem>
                    </div>
                    <div 
                    className="accesoIncorrectoWrapper"
                    style={{display: !accesoIncorrecto?'none':'block'}}
                    >
                        <span>Correo ó contraseña errada</span>
                    </div>
                </Form>
            </div>
        );
    }
}

const WrappedSignInForm = Form.create({ name: 'advanced_search' })(SignInForm);

export default WrappedSignInForm;