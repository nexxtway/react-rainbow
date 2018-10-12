import React from 'react';
import PropTypes from 'prop-types';
import AssistiveText from './../AssistiveText';
import MarkerIcon from './markerIcon';

const ICON_DESCRIPTION = 'marker icon';

export default function Icon({ icon }) {
    if (icon) {
        return icon;
    }
    return (
        <span className="rainbow-google-map-marker_icon" title={ICON_DESCRIPTION}>
            <MarkerIcon />
            <AssistiveText text={ICON_DESCRIPTION} />
        </span>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
};

Icon.defaultProps = {
    icon: null,
};
