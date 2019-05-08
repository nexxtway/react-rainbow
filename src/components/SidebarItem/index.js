/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withContext } from '../Sidebar/context';
import RenderIf from '../RenderIf';
import './styles.css';

/**
 * @category Layout
 */
function SidebarItem(props) {
    const { label, icon, name, href, onClick, className, style, selectedItem, onSelect } = props;
    const isSelected = name === selectedItem;

    const getContainerClassNames = () =>
        classnames(
            'rainbow-sidebar-item',
            {
                'rainbow-sidebar-item--active': isSelected,
            },
            className,
        );

    const getAriaCurrent = () => {
        if (isSelected) {
            return 'page';
        }
        return undefined;
    };

    function hanldeOnClick(event) {
        onClick(event);
        onSelect(event, name);
    }

    return (
        <li className={getContainerClassNames()} style={style}>
            <a
                href={href}
                onClick={hanldeOnClick}
                className="rainbow-sidebar-item_action"
                aria-current={getAriaCurrent()}
            >
                <div className="rainbow-sidebar-item_icon">{icon}</div>
                <RenderIf isTrue={!!label}>
                    <span className="rainbow-sidebar-item_label">{label}</span>
                </RenderIf>
            </a>
        </li>
    );
}

SidebarItem.propTypes = {
    /** A unique identifier for the navigation item. */
    name: PropTypes.string.isRequired,
    /** The text to show if it is passed. The text displayed for the SidebarItem. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon displayed for the SidebarItem. It must be a svg icon or a font icon. */
    icon: PropTypes.node.isRequired,
    /** The URL of the page that the navigation item goes to. */
    href: PropTypes.string,
    /** Event fired when the item is clicked. */
    onClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

SidebarItem.defaultProps = {
    label: '',
    href: 'javascript:void(0);',
    onClick: () => {},
    className: undefined,
    style: undefined,
};

export default withContext(SidebarItem);
