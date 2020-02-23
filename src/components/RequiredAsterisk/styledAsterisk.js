import styled from 'styled-components';
import attachThemeAttrs from '../../styles/helpers/attachThemeAttrs';

const StyledAsterisk = attachThemeAttrs(styled.abbr)`
    text-decoration: none;
    cursor: help;
    border: 0;
    color: ${props => props.palette.error.main};
    margin: 0 0.125rem;
    box-sizing: border-box;

    &[title] {
        border: 0;
        text-decoration: none;
        cursor: help;
    }
`;

export default StyledAsterisk;
