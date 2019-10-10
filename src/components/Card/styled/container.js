import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GRAY_2 } from '../../../styles/colors';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4, SHADOW_6 } from '../../../styles/shadows';
import { MARGIN_LARGE } from '../../../styles/margins';

const StyledContainer = styled.article`
    position: relative;
    background-color: ${COLOR_WHITE};
    border: 0.0625rem solid ${COLOR_GRAY_2};
    border-radius: ${BORDER_RADIUS_1};
    background-clip: padding-box;
    box-shadow: ${SHADOW_4};
    overflow: hidden;

    &:hover {
        box-shadow: ${SHADOW_6};
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
