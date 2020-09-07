import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import HiddenElement from '../../../Structural/hiddenElement';
import { CssCircleColor } from '../styled';

export const StyledContainer = styled.div`
    flex: 0 0 auto;
    padding: 0.5rem 0 0.25rem;
`;

export const StyledColors = styled.div`
    text-align: center;
`;

export const StyledColor = styled.span`
    line-height: inherit;
    height: inherit;
`;

export const StyledInput = attachThemeAttrs(styled(HiddenElement))`
    &:focus + label {
        border: 1px solid ${props => props.palette.brand.main};
        box-shadow: ${props => props.shadows.brand};
    }
`;

export const StyledLabel = attachThemeAttrs(styled.label)`
    display: inline-block;
    margin: 0 0.45rem;
    width: 28px;
    height: 28px;
    padding: 0;
    ${CssCircleColor}

    &:hover {
        cursor: pointer;
    }
`;
