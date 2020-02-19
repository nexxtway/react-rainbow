import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitle = attachThemeAttrs(styled.h1)`
    font-family: 'Lato Light', Arial, sans-serif;
    padding: 0;
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.palette.text.title};
    margin: 0;
    font-weight: inherit;
`;

export default StyledTitle;
