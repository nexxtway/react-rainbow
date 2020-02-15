import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledOl = attachThemeAttrs(styled.ol)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    li > a {
        text-decoration: none;
    }

    > li:last-child > a {
        font-weight: 900;
        color: ${props => props.palette.text.main};
        pointer-events: none;
    }

    > li:last-child > button {
        font-weight: 900;
        color: ${props => props.palette.text.main};
        pointer-events: none;
    }

    > li:not(:last-child)::after {
        margin: 0 10px;
        content: '>';
        color: ${props => props.palette.text.label};
    }
`;

export default StyledOl;
