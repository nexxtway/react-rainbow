import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_SMALL } from '../../../../styles/fontSizes';
import { BORDER_RADIUS_3 } from '../../../../styles/borderRadius';

const StyledDay = attachThemeAttrs(styled.div)`
    flex: 1 0 auto;
    border-right: 1px solid ${props => props.palette.border.divider};
    position: relative;
    width: 81px;
    min-width: 81px;
    height: 100%;
    color: ${props => props.palette.brand.main};
    padding: 3px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
    }

    h4 {
        font-size: ${FONT_SIZE_TEXT_SMALL};
        font-weight: bold;
    }

    > div {        
        ${props =>
            props.isToday &&
            `
                padding: 0px 11px;
                border: 1px solid ${props.palette.brand.main};
                border-radius: ${BORDER_RADIUS_3};
            `};
    }
`;

export default StyledDay;
