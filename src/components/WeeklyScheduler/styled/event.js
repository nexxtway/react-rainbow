import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';

const StyledEvent = attachThemeAttrs(styled.div)`
    text-align: left;
    border: 1px solid ${props => props.palette.border.divider};
    border-left: 3px solid ${props => props.palette.brand.main};
    color: ${props => props.palette.text.main};
    background-color: ${props => props.palette.background.secondary};
    border-radius: 3px;
    padding: 0;
    padding-left: 2px;
    position: absolute;
    left: 2px;
    right: 2px;
    top: ${props => props.hourHeight}px;
    height: ${props => props.height}px;

    .scheduler-event-dates {
        font-size: 0.25rem;
        margin-top: -1px;
        color: ${props => props.palette.brand.main};
    }

    .scheduler-event-title {
        font-size: 0.3rem;
        margin-top: -1px;
    }
`;

export default StyledEvent;
