import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledMarkerContainer from './styled/markerContainer';
import StyledMarker from './styled/marker';

export default function Marker(props) {
    const { style, isVisible, variant } = props;
    const markerStyle = {
        ...style,
        opacity: isVisible ? 1 : 0,
    };

    return (
        <RenderIf isTrue={isVisible}>
            <StyledMarkerContainer>
                <StyledMarker variant={variant} style={markerStyle} />
            </StyledMarkerContainer>
        </RenderIf>
    );
}

Marker.propTypes = {
    style: PropTypes.object,
    isVisible: PropTypes.any,
    variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
};

Marker.defaultProps = {
    style: undefined,
    isVisible: false,
    variant: 'default',
};
