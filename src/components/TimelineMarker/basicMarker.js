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

export default function BasicTimelineMarker(props) {
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

BasicTimelineMarker.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

BasicTimelineMarker.defaultProps = {
    label: null,
    description: null,
    datetime: null,
    icon: <CalendarIcon />,
    children: null,
    className: undefined,
    style: undefined,
};
