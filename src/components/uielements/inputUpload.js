import React, { Component } from 'react';
import InputUploadStyleWrapper from './styles/inputUpload.style';
import { Icon } from 'antd';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreImagen: null,
        }
    }
    render() {
        const { handle, label, falta } = this.props;
        const titulo = label?label:'Subir archivo';
        const readFile = (input) => {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
        
                reader.onload = (e) => {
                    this.setState({nombreImagen: input.files[0].name});
                    handle(e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }

        const deleteFile = () => {
            this.setState({nombreImagen: null});
            handle(null);
        }

        const onChange = (e) => {
            readFile(e.target);
        }

        return (
            <InputUploadStyleWrapper>
                <div className="btnWrapper">
                    <input id="file-upload" name="input" type="file" accept="image/*" onChange={onChange} style={{display:'none'}}/>
                    <label htmlFor="file-upload" className={falta?"falta":""}>
                        <Icon type="upload" />  {titulo}
                    </label>
                </div>
                { this.state.nombreImagen && 
                <div className="fileWrapper">
                    <div className="name">
                        <Icon type="paper-clip" /> {this.state.nombreImagen}
                    </div>
                    <div className="eliminar" onClick={deleteFile}>
                        <span>x</span>
                    </div>
                </div>
                }
            </InputUploadStyleWrapper>
        );
    }
}