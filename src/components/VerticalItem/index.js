/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer as NavStateConsumer } from '../VerticalNavigation/context';
import { Consumer as ItemIdConsumer } from '../VerticalSection/context';
import RenderIf from '../RenderIf';
import './styles.css';

function Item(props) {
    const {
        label,
        icon,
        name,
        href,
        onClick,
        notification,
        className,
        style,
        selectedItem,
        onSelect,
        entityHeaderId,
    } = props;
    const isSelected = name === selectedItem;

    const getContainerClassNames = () => classnames('rainbow-nav-vertical__item', {
        'rainbow-is-active': isSelected,
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
                aria-describedby={entityHeaderId}
                className="rainbow-nav-vertical__action"
                aria-current={getAriaCurrent()}>

                <RenderIf isTrue={!!icon}>
                    <span className="rainbow-nav-vertical_icon" >{icon}</span>
                </RenderIf>
                {label}
                <RenderIf isTrue={!!notification}>
                    <span className="rainbow-col_bump-left">{notification}</span>
                </RenderIf>
            </a>
        </li>
    );
}

/**
 * A text-only link within VerticalNavigationSection or VerticalNavigationOverflow.
 */
export default function VerticalItem(props) {
    return (
        <NavStateConsumer>
            {context => (
                <ItemIdConsumer>
                    {entityHeaderId => (
                        <Item {...props} {...context} entityHeaderId={entityHeaderId} />
                    ) }
                </ItemIdConsumer>
            )}
        </NavStateConsumer>
    );
}

VerticalItem.propTypes = {
    /** The text displayed for the navigation item. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** A unique identifier for the navigation item. */
    name: PropTypes.string.isRequired,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** The URL of the page that the navigation item goes to. */
    href: PropTypes.string,
    /** The notification comoponent to display on the right. */
    notification: PropTypes.node,
    /** Event fired when the item is clicked. */
    onClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

VerticalItem.defaultProps = {
    label: '',
    icon: undefined,
    href: 'javascript:void(0);',
    onClick: () => {},
    notification: null,
    className: undefined,
    style: undefined,
};
