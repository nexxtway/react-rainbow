import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default function Icon(props) {
    const { icon, position } = props;

    const getClassNames = () => (
        classnames('rainbow-nav-vertical-section-overflow__icon', `rainbow-nav-vertical-section-overflow__icon_${position}`)
    );

    if (icon) {
        return <span className={getClassNames()}>{icon}</span>;
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

