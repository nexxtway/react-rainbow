import React from 'react';
import PropTypes from 'prop-types';
import {
    isIconNameValid,
    getSpriteName,
    getIconName,
} from './utils';

export default function IconSvg(props) {
    const {
        className,
        style,
        iconName,
    } = props;

    if (isIconNameValid(iconName)) {
        const sprite = getSpriteName(iconName);
        const icon = getIconName(iconName);

        return (
            <svg className={className} style={style} aria-hidden>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
            </svg>
        );
    }
    return null;
}

IconSvg.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The icon name. It is required and will take the following format:
     ‘sprite_name:icon_name’ e.g. ‘utility:log_a_call’. */
    iconName: PropTypes.string.isRequired,
};

IconSvg.defaultProps = {
    className: '',
    style: {},
};
