import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLi = attachThemeAttrs(styled.li)`
    position: relative;
    box-sizing: border-box;
    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                left: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${props.palette.brand.main};
            }
        `};
`;

export default StyledLi;
