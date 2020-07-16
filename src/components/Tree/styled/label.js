import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const Label = attachThemeAttrs(styled.span)`
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-size: 1.1em;
    color: ${props => props.palette.text.main};
    text-align: start;
    line-height: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export default Label;
