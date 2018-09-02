import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default function Icon(props) {
    const { icon, position } = props;
    if (icon) {
        const className = classnames(
            'rainbow-button__icon',
            {
                'rainbow-button__icon_left': position === 'left',
                'rainbow-button__icon_right': position === 'right',
            });
        return <span className={className}>{icon}</span>;
    }

    return null;
}

Icon.propTypes = {
    icon: PropTypes.node,
    position: PropTypes.oneOf(['left, right']),
};

Icon.defaultProps = {
    icon: null,
    position: 'left',
};

