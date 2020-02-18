import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledDivider = attachThemeAttrs(styled.div)`
    display: flex;
    align-items: center;
    width: 2rem;

    &::after {
        content: '';
        border: 0.5px solid ${props => props.palette.border.divider};
        margin: 0 auto;
        width: 1px;
        height: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 1rem;

        &::after {
            height: 1px;
            width: 100%;
        }
    }
`;

export default StyledDivider;
