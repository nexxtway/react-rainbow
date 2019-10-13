import styled from 'styled-components';
import { COLOR_BRAND_LIGHT } from '../../../../styles/colors';

const StyledContainer = styled.div`
    border-radius: 4px;
    border: dashed 1px #eaeef5;
    background-color: #fcfcfc;
    height: 260px;
    margin: 0 16px 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    ${props =>
        props.isDragOver &&
        `
            background-color: rgba(234, 238, 245, 0.4);
            border: dashed 1.5px ${COLOR_BRAND_LIGHT};
        `};
`;

export default StyledContainer;
