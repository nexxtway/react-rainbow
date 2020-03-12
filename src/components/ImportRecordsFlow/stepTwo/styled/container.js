import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    border-radius: 4px;
    border: dashed 1px ${props => props.palette.background.highlight};
    background-color: ${props => props.palette.background.secondary};
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
            background-color: ${props.palette.action.active};
            border: dashed 1px ${props.palette.brand.main};
        `};
`;

export default StyledContainer;
