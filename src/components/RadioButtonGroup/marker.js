import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';

export default function Marker(props) {
    const { style, isVisible } = props;
    const markerStype = {
        ...style,
        opacity: isVisible ? 1 : 0,
    };

    return (
        <RenderIf isTrue={isVisible}>
            <div className="rainbow-radio-button-group_marker-container">
                <span className="rainbow-radio-button-group_marker" style={markerStype} />
            </div>
        </RenderIf>
    );
}

Marker.propTypes = {
    style: PropTypes.object,
    isVisible: PropTypes.any,
};

Marker.defaultProps = {
    style: undefined,
    isVisible: false,
};
