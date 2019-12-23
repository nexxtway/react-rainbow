import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4, SHADOW_6 } from '../../../styles/shadows';
import { MARGIN_LARGE } from '../../../styles/margins';
import { getRainbowTheme } from '../../../styles/helpers/getTheme';

const StyledContainer = styled.article.attrs(props => getRainbowTheme(props))`
    position: relative;
    background-color: ${props => props.theme.rainbow.palette.background.primary};
    color: ${props => props.theme.rainbow.palette.text.primary};
    border: 0.0625rem solid ${props => props.theme.rainbow.palette.divider};
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
