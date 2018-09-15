/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer as NavigationConsumer } from '../VerticalNavigation/context';
import { Consumer as SectionConsumer } from '../VerticalSection/context';
import { Consumer as SectionOverflowConsumer } from '../VerticalSectionOverflow/context';
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
        isExpanded,
    } = props;
    const isSelected = name === selectedItem;

    const getContainerClassNames = () => classnames('rainbow-vertical-item', {
        'rainbow-vertical-item--active': isSelected,
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

    function resolveTabIndex() {
        if (isExpanded === false) {
            return -1;
        }
        return 0;
    }

    return (
        <li className={getContainerClassNames()} style={style}>
            <a
                href={href}
                onClick={hanldeOnClick}
                aria-describedby={entityHeaderId}
                className="rainbow-vertical-item_action"
                aria-current={getAriaCurrent()}
                tabIndex={resolveTabIndex()}>
                {label}
                <RenderIf isTrue={!!notification}>
                    <span className="rainbow-vertical-item_notification">{notification}</span>
                </RenderIf>
            </a>
            <RenderIf isTrue={!!icon}>
                <span className="rainbow-vertical-item_icon" >{icon}</span>
            </RenderIf>
        </li>
    );
}

/**
 * A text-only link within VerticalNavigationSection or VerticalNavigationOverflow.
 */
export default function VerticalItem(props) {
    return (
        <NavigationConsumer>
            {context => (
                <SectionConsumer>
                    {entityHeaderId => (
                        <SectionOverflowConsumer>
                            {isExpanded => (
                                <Item
                                    {...props}
                                    {...context}
                                    entityHeaderId={entityHeaderId}
                                    isExpanded={isExpanded} />
                            )}
                        </SectionOverflowConsumer>
                    ) }
                </SectionConsumer>
            )}
        </NavigationConsumer>
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
