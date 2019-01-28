import styled from 'styled-components';
import WithDirection from '../../../settings/withDirection';
import { paleta } from '../../../settings/index';
const ConfirmStyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
  
    .icono {
        font-size: 3em;
        color: red;
    }

    .titleWrapper {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            margin-bottom: 0px;
            color: rgba(0, 0, 0, 0.65);
        }
    }

    .contentWrapper {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        p {
            font-size: 1em;
            margin-bottom: 0px;
        }
    }
    
    .botonesWrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        margin-top: 15px;
    }

    #btnOk, #btnNo {
        border: 0;
        height: 30px;
    }

    #btnOk {
        background-color: red;
    }

    #btnNo {
        background-color: ${paleta.green};
    }
`;

export default WithDirection(ConfirmStyleWrapper);