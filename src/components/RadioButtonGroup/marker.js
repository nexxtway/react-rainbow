import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledMarkerContainer from './styled/markerContainer';
import StyledMarker from './styled/marker';

export default function Marker(props) {
    const { style, isVisible, variant, size, borderRadius } = props;
    const markerStyle = {
        ...style,
        opacity: isVisible ? 1 : 0,
    };

    return (
        <RenderIf isTrue={isVisible}>
            <StyledMarkerContainer size={size}>
                <StyledMarker
                    variant={variant}
                    size={size}
                    style={markerStyle}
                    borderRadius={borderRadius}
                />
            </StyledMarkerContainer>
        </RenderIf>
    );
}

Marker.propTypes = {
    style: PropTypes.object,
    isVisible: PropTypes.any,
    variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    borderRadius: PropTypes.oneOf(['square', 'semi-rounded', 'rounded']),
};

Marker.defaultProps = {
    style: undefined,
    isVisible: false,
    variant: 'default',
    size: 'medium',
    borderRadius: 'rounded',
};
