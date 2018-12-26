/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer as NavigationConsumer } from './context';
import RenderIf from '../../../src/components/RenderIf';
import './styles.css';

function Item(props) {
    const {
        label,
        icon,
        name,
        href,
        onClick,
        className,
        style,
        selectedItem,
        onSelect,
    } = props;
    const isSelected = name === selectedItem;

    const getContainerClassNames = () => classnames('rainbow-sidebar-item', {
        'rainbow-sidebar-item--active': isSelected,
    }, className);

    const getAriaCurrent = () => {
        if (isSelected) {
            return 'page';
        }
        return undefined;
    };

    function hanldeOnClick(e) {
        onClick(e);
        onSelect(e, name);
    }

    return (
        <li className={getContainerClassNames()} style={style}>
            <a
                href={href}
                onClick={hanldeOnClick}
                className="rainbow-sidebar-item_action"
                aria-current={getAriaCurrent()}>
                <div className="rainbow-sidebar-item_icon" >{icon}</div>
                <RenderIf isTrue={!!label}>
                    <span className="rainbow-sidebar-item_label" >{label}</span>
                </RenderIf>
            </a>
        </li>
    );
}

export default function SidebarItem(props) {
    return (
        <NavigationConsumer>
            {context => (
                <Item
                    {...props}
                    {...context} />
            )}
        </NavigationConsumer>
    );
}

SidebarItem.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

SidebarItem.defaultProps = {
    label: '',
    href: 'javascript:void(0);',
    onClick: () => {},
    notification: null,
    className: undefined,
    style: undefined,
};
