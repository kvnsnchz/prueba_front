import styled from 'styled-components';
import WithDirection from '../../../settings/withDirection';

const ErrorStyleWrapper = styled.div`
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
    

    .btnAceptar {
        width: 70%;
    }
`;

export default WithDirection(ErrorStyleWrapper);