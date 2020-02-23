import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';

const StyledImagesUl = attachThemeAttrs(styled.ul)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: ${BORDER_RADIUS_1};
    border: 1px solid ${props => props.palette.border.divider};
    box-shadow: ${props => props.shadows.shadow_4};
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    :active,
    :focus {
        color: inherit;
        text-decoration: inherit;
        box-shadow: 0 0 1px ${props => props.palette.brand.main};
        outline: none;
    }
`;

export default StyledImagesUl;
