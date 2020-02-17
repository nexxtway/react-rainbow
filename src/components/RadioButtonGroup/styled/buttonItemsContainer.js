import styled from 'styled-components';
import { BORDER_RADIUS_2 } from '../../../styles/borderRadius';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttr';

const StyledButtonItemsContainer = attachThemeAttrs(styled.div)`
    ${props => `
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: ${BORDER_RADIUS_2};
        border: solid 1px ${
            props.palette.isDark ? 'rgba(0, 0, 0, 0.4)' : props.palette.border.divider
        };
        background-color: ${
            props.palette.isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(227, 229, 237, 0.4)'
        };
        line-height: 2.5rem;
        height: 2.5rem;
    
        > :first-child {
            margin-left: -1px;
        }
    
        > :last-child {
            margin-right: -2px;
        }
    
        ${props.variant === 'inverse' &&
            `
                border-color: ${
                    props.palette.isDark ? props.palette.border.divider : 'rgba(0, 0, 0, 0.4)'
                };
                background-color: ${
                    props.palette.isDark ? 'rgba(227, 229, 237, 0.4)' : 'rgba(0, 0, 0, 0.4)'
                };
            `};
    `};
`;

export default StyledButtonItemsContainer;
