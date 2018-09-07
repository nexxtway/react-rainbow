import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';

export default function Icon(props) {
    const {
        icon,
        position,
        error,
    } = props;

    const getIconClassNames = () => {
        if (error) {
            return `rainbow-input__icon rainbow-input__icon_${position}`;
        }
        return classnames(
            'rainbow-icon rainbow-input__icon rainbow-icon-text-default',
            `rainbow-input__icon_${position}`,
        );
    };

    return (
        <RenderIf isTrue={!!icon}>
            <span className={getIconClassNames()}>
                {icon}
            </span>
        </RenderIf>
    );
}

Icon.propTypes = {
    icon: PropTypes.node,
    error: PropTypes.node,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    icon: null,
    error: null,
};
