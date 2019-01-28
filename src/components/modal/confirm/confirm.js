import React, { Component } from 'react';
import ConfirmStyleWrapper from './confirm.style';
import Button from '../../uielements/button';
import Modal from '../modal';

export default class extends Component {
   
    render() {
        const { visible, handleOk, handleNo, title, loading } = this.props;
        return (
        <Modal
        visible={visible}
        onCancel={handleNo}
        footer={null}
        width="330px"
        closable={false}
        >
            <ConfirmStyleWrapper>
                <i className="ion-alert-circled icono"/>
                <div className="titleWrapper">
                    <h3>{title}</h3>
                </div> 
                <div className="botonesWrapper">
                    <Button 
                    type="primary"
                    id="btnNo"
                    onClick={handleNo}
                    >
                        No
                    </Button>
                    <Button 
                    type="primary"
                    id="btnOk"
                    onClick={handleOk}
                    loading={loading}
                    >
                        Si
                    </Button>
                </div>
            </ConfirmStyleWrapper>
        </Modal>
        );
    }
}