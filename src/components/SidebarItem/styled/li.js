import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledLi = attachThemeAttrs(styled.li)`
    position: relative;
    padding: 0 0.5rem;
    margin: 1rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;

    :last-child {
        margin-bottom: 0;
    }

    ${props =>
        props.isSelected &&
        `
            ::before {
                content: "";
                width: 0.25rem;
                right: 0;
                top: 0;
                bottom: 0;
                position: absolute;
                background-color: ${props.palette.brand.main};
                border-radius: 100px;
        `};
`;

export default StyledLi;
