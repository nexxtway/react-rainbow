import React from 'react';
import PropTypes from 'prop-types';

export default function Marker(props) {
    const { style, isVisible } = props;

    return isVisible ? (
        <div className="rainbow-radio-button-group_marker-container">
            <span className="rainbow-radio-button-group_marker" style={style} />
        </div>
    ) : null;
}

Marker.propTypes = {
    style: PropTypes.object,
    isVisible: PropTypes.any,
};

Marker.defaultProps = {
    style: undefined,
    isVisible: false,
};
