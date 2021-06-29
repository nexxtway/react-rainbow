import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledStarContainer = attachThemeAttrs(styled.span)`
    line-height: inherit;
    height: inherit;
    color: ${props => props.palette.warning.main};

    :not(:last-child) {
        margin-right: 0.25rem;
    }

    display: ${props => (props.readOnly ? '' : 'inline-block')};
    transition: transform 300ms ease-in-out;

    &:hover {
        transform: scale(1.5);
    }
`;

export default StyledStarContainer;
