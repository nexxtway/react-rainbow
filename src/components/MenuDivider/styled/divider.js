import styled from 'styled-components';
import getTheme from '../../../styles/helpers/getTheme';

const StyledDivider = styled.li.attrs(props => {
    const divider = getTheme(props).palette.border.divider;
    return { divider };
})`
    border-top: solid 1px ${props => props.divider};
    box-sizing: border-box;
    ${props =>
        props.variant === 'space' &&
        `
            margin-top: 0.5rem;
            padding-top: 0.5rem;
        `};
`;

export default StyledDivider;
