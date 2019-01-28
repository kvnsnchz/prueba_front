import React, { Component } from 'react';
import SignupStyleWrapper from './signup.style';
import Button from '../../../components/uielements/button';
import { Input } from 'antd';
import 'moment/locale/es';
import Form from '../../../components/uielements/form';
import InputUpload from '../../../components/uielements/inputUpload';

const FormItem = Form.Item;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagen: null,
            nombre: null,
            apellido: null,
            email: null,
            password: null, 
        }
    }

    handleInput = (e, key) => {
        this.setState({
            [key]: e.target.value,
        });
    }

    handleInputUpload = (imagen) => {
        this.setState({imagen: imagen});
    }

    render() {
        const { loading, handle } = this.props;
        const {  
            nombre,
            apellido,
            email,
            password,
            imagen, 
        } = this.state;
        const { getFieldDecorator } = this.props.form;
    
        const handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                    
                if (!err) {

                    let usuarioNuevo = {
                        nombre,
                        apellido,
                        email,
                        password,
                    };

                    if(imagen){
                        usuarioNuevo.imagen = imagen;
                    }
                    handle(usuarioNuevo);
                }     
                
            });
        }

        return (
        <SignupStyleWrapper>
            <h2 className="title">Registro de usuario</h2>
            <div className="isoSignUpForm">
                <Form onSubmit={handleSubmit}>
                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('correo', {
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
                            name='correo'
                            id='correo'
                            placeholder="Correo electronico"
                            onChange={(e) => this.handleInput(e, 'email')}
                            />)}
                        </FormItem>
                    </div>
                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('nombre', {
                            rules: [
                                {
                                required: true,
                                message: 'Por favor ingresa su nombre',
                                },
                            ],
                            })(
                            <Input 
                            name='nombre'
                            id='nombre'
                            placeholder="Nombre"
                            onChange={(e) => this.handleInput(e, 'nombre')}
                            />)}
                        </FormItem>
                    </div>
                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('apellido', {
                            rules: [
                                {
                                required: true,
                                message: 'Por favor ingresa su apellido',
                                },
                            ],
                            })(
                            <Input 
                            name='apellido'
                            id='apellido'
                            placeholder="Apellido"
                            onChange={(e) => this.handleInput(e, 'apellido')}
                            />)}
                        </FormItem>
                    </div>
                    <div className="isoInputWrapper">
                        <FormItem>
                            {getFieldDecorator('password', {
                            rules: [
                                {
                                min: 8,
                                message: 'La contraseña es muy corta',
                                },
                                {
                                required: true,
                                message: 'Por favor ingresa una contraseña',
                                },
                            ],
                            })(
                            <Input 
                            name='password'
                            id='password'
                            type='password'
                            placeholder="Contraseña"
                            onChange={(e) => this.handleInput(e, 'password')}
                            />)}
                        </FormItem>
                    </div>
                    <div className="isoInputWrapper">
                        <InputUpload 
                        handle={this.handleInputUpload}
                        label={'Subir imagen de perfil'}
                        />
                    </div>
                    <FormItem>
                        <Button
                        type="primary"
                        id="btnSignUp"
                        htmlType="submit"
                        loading={loading}
                        >
                            Registrame
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </SignupStyleWrapper>
        );
    }
}

const WrappedSignUp = Form.create()(SignUp);

export default WrappedSignUp;