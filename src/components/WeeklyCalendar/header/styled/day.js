import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_HEADING_MEDIUM, FONT_SIZE_TEXT_SMALL } from '../../../../styles/fontSizes';

const StyledDay = attachThemeAttrs(styled.div)`
    flex: 1 0 auto;
    border-right: 1px solid ${props => props.palette.border.divider};
    position: relative;
    width: 100px;
    min-width: 100px;
    height: 100%;
    color: ${props => props.palette.brand.main};
    padding: 3px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: ${FONT_SIZE_HEADING_MEDIUM};
        font-weight: 900;
    }

    p {
        font-size: ${FONT_SIZE_TEXT_SMALL};
        font-weight: 900;
    }

    > div {        
        ${props =>
            props.isToday &&
            `
                padding: 0px 11px;
                border: 1px solid ${props.palette.brand.main};
                border-radius: 12px;
            `};
    }
`;

export default StyledDay;
