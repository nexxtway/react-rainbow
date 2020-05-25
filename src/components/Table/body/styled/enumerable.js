import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledEnumerable = attachThemeAttrs(styled.span)`
    display: block;
    text-align: center;
    color: ${props => props.palette.text.header};

    &::before {
        content: counter(rowCounter);
        counter-increment: rowCounter;                   
    }
`;

export default StyledEnumerable;
