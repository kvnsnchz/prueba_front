import styled from 'styled-components';
import WithDirection from '../../../settings/withDirection';

const InputUploadStyleWrapper = styled.div`
    
    display: flex;
    flex-direction: column;

    .btnWrapper{
        
        display: flex;
        flex-direction: row;

        label {
            background-color: #fff;
            border: 1px solid #d9d9d9;
            padding: 4px 11px;
            width: 100%;
            border-radius: 4px;
            font-size: 14px;
            text-align: center;
            color: #595959;
            font-weight: bold;
            height: 36px;
            padding-top: 7px;
            cursor: pointer;

            &:hover {
                border: 1px solid #4482FF;
                color: #4482FF;
            }
        }

        .falta {
            border: 1px solid red;
        }
    }

    .fileWrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 8px;
        margin-left: 5px;
        font-size: 14px;
        
        .name {
            text-overflow:ellipsis;
            white-space:nowrap; 
            overflow:hidden; 
        }

        .eliminar {
            margin-left: 5px;
            cursor: pointer;
        }
    }
  
`;

export default WithDirection(InputUploadStyleWrapper);
