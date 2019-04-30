/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';

export default function MenuItem(props) {
    const {
        label,
        description,
        icon,
        onClick,
    } = props;
    const option = {
        label,
        description,
        icon,
    };

    return (
        <li
            className="rainbow-lookup_menu-item"
            role="presentation"
            onClick={() => onClick(option)}
            onMouseEnter={() => {}}>

            <a
                href="javascript:void(0);"
                role="menuitem">

                <RenderIf isTrue={!!icon}>
                    <span className="rainbow-lookup_menu-item_icon-container">
                        {icon}
                    </span>
                </RenderIf>
                <span className="rainbow-lookup_menu-item_label-container">
                    {label}
                    <RenderIf isTrue={!!description}>
                        <span className="rainbow-lookup_menu-item_description">
                            {description}
                        </span>
                    </RenderIf>
                </span>
            </a>
        </li>
    );
}

MenuItem.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    description: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    label: undefined,
    description: undefined,
    icon: undefined,
    onClick: () => {},
};
