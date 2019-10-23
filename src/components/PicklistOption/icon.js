import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledIcon from './styled/icon';

export default function Icon({ icon, isVisible, position }) {
    return (
        <RenderIf isTrue={isVisible}>
            <StyledIcon position={position}>{icon}</StyledIcon>
        </RenderIf>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
    isVisible: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    icon: null,
};
