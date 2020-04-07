import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { MARGIN_LARGE } from '../../../styles/margins';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledContainer = attachThemeAttrs(styled.article)`
    position: relative;
    background-color: ${props => props.palette.background.main};
    color: ${props => props.palette.text.main};
    border: 0.0625rem solid ${props => props.palette.border.divider};
    border-radius: ${BORDER_RADIUS_1};
    background-clip: padding-box;
    box-shadow: ${props => props.shadows.shadow_4};
    overflow: hidden;

    &:hover {
        box-shadow: ${props => props.shadows.shadow_6};
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    .rainbow-carousel-image {
        box-shadow: none;
    }

    & > .rainbow-google-map {
        .rainbow-google-map_map-container {
            border: none;
            border-radius: ${BORDER_RADIUS_1} ${BORDER_RADIUS_1} 0 0;
            box-shadow: none;
            height: 100%;
            width: 100%;
        }

        .rainbow-google-map_coordinates-container {
            margin-bottom: ${MARGIN_LARGE};
            padding: 0 1rem;
            width: 100%;
        }
    }

    ${props =>
        props.hasHeader &&
        `
            > .rainbow-google-map > .rainbow-google-map_map-container {
                border-radius: 0;
            }
        `};
`;

export default StyledContainer;
