import React from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from './calendarIcon';
import StyledLi from './styled/li';
import StyledColumnLeft from './styled/columnLeft';
import StyledIconContainer from './styled/iconContainer';
import StyledContentContainer from './styled/contentContainer';
import StyledHeader from './styled/header';
import StyledLabel from './styled/label';
import StyledDatetime from './styled/datetime';
import StyledDescription from './styled/description';
import StyledBody from './styled/body';

/**
 * The TimelineMarker displays one event of an item timeline.
 * @category Layout
 */
export default function TimelineMarker(props) {
    const { icon, label, description, datetime, children, className, style } = props;

    return (
        <StyledLi className={className} style={style}>
            <StyledColumnLeft>
                <StyledIconContainer>{icon}</StyledIconContainer>
            </StyledColumnLeft>
            <StyledContentContainer>
                <div>
                    <StyledHeader>
                        <StyledLabel>{label}</StyledLabel>
                        <StyledDatetime>{datetime}</StyledDatetime>
                    </StyledHeader>
                    <StyledDescription>{description}</StyledDescription>
                </div>
                <StyledBody>{children}</StyledBody>
            </StyledContentContainer>
        </StyledLi>
    );
}

TimelineMarker.propTypes = {
    /** The text to be displayed as the TimelineMarker's label. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text to be displayed as the TimelineMarker's description. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text with the formatted datetime of the event. */
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show at the left of the TimelineMarker.
     * If not passed by default a calendar icon will be showed.  */
    icon: PropTypes.node,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

TimelineMarker.defaultProps = {
    label: null,
    description: null,
    datetime: null,
    icon: <CalendarIcon />,
    children: null,
    className: undefined,
    style: undefined,
};
