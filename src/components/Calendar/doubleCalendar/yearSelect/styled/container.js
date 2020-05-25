import styled from 'styled-components';
import attachThemeAttrs from '../../../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.div)`
    position: relative;

    ${props =>
        props.editMode &&
        `
        ::after {
            content: '';
            position: absolute;
            display: block;
            right: 1rem;
            bottom: 45%;
            pointer-events: none;
            width: 0.5rem;
            height: 0.5rem;
            border-style: solid;
            border-width: 0.15em 0.15em 0 0;
            transform: rotate(135deg);
            vertical-align: top;
            color: ${props.palette.brand.main};
            box-sizing: border-box;
        }
        `};
`;

export default StyledContainer;
