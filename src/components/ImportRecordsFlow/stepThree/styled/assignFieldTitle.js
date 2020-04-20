import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';

const StyledAssignFieldTitle = attachThemeAttrs(styled.h1)`
    position: relative;
    display: block;
    box-sizing: border-box;
    font-family: 'Lato Light', Arial, sans-serif;
    padding: 1rem 2.5rem;
    text-align: center;
    font-size: 1.5rem;
    color: ${props => props.palette.text.title};
    margin: 0;
    font-weight: inherit;

    b {
        font-family: 'Lato Bold', Arial, sans-serif;
    }
`;

export default StyledAssignFieldTitle;
