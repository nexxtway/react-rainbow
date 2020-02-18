import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledTitle = attachThemeAttrs(styled.h2)`
    margin: 0;
    padding: 0.5rem 0.5rem 0.5rem 1.25rem;
    line-height: 1.5rem;
    font-size: 0.9375rem;
    font-weight: inherit;
    color: ${props => props.palette.brand.main};
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
`;

export default StyledTitle;
