import React, { Component } from 'react';
import ErrorStyleWrapper from './error.style';
import Button from '../../uielements/button';
import Modal from '../modal';

export default class extends Component {
   
    render() {
        const { visible, handle } = this.props;
        return (
        <Modal
        visible={visible}
        onCancel={handle}
        footer={null}
        width="330px"
        closable={false}
        >
            <ErrorStyleWrapper>
                <i className="ion-alert-circled icono"/>
                <div className="titleWrapper">
                    <h3>Disculpa</h3>
                </div>
                <div className="contentWrapper">
                    <p>Ha ocurrido un error</p>
                    <p>intenta mas tarde</p>
                </div>   
                <Button 
                type="primary btnAceptar"
                onClick={handle}
                >
                Aceptar
                </Button>
            </ErrorStyleWrapper>
        </Modal>
        );
    }
}