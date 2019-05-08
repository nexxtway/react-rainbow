import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';

export default function Icon({ icon, isVisible, position }) {
    const getIconClassNames = () =>
        classnames('rainbow-menu-item_icon', `rainbow-menu-item_icon--${position}`);

    return (
        <RenderIf isTrue={isVisible}>
            <span className={getIconClassNames()}>{icon}</span>
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
