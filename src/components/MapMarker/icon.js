import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import StyledIconContainer from './styled/iconContainer';
import MarkerIcon from './markerIcon';
import StyledIcon from './styled/icon';

const ICON_DESCRIPTION = 'marker icon';

export default function Icon({ icon }) {
    if (icon) {
        return <StyledIconContainer>{icon}</StyledIconContainer>;
    }
    return (
        <StyledIcon title={ICON_DESCRIPTION}>
            <MarkerIcon />
            <AssistiveText text={ICON_DESCRIPTION} />
        </StyledIcon>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
};

Icon.defaultProps = {
    icon: null,
};
