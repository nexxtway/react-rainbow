/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer as NavigationConsumer } from '../VerticalNavigation/context';
import { Consumer as SectionConsumer } from '../VerticalSection/context';
import { Consumer as SectionOverflowConsumer } from '../VerticalSectionOverflow/context';
import RenderIf from '../RenderIf';
import StyledLi from './styled/li';
import StyledAnchor from './styled/anchor';
import StyledLabel from './styled/label';
import StyledNotification from './styled/notification';
import StyledIcon from './styled/icon';

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
        <StyledLi
            className={className}
            style={style}
            data-active={isSelected}
            isSelected={isSelected}
        >
            <StyledAnchor
                data-id="vertical-item-clickable-element"
                href={href}
                onClick={hanldeOnClick}
                aria-describedby={entityHeaderId}
                aria-current={getAriaCurrent()}
                tabIndex={resolveTabIndex()}
            >
                <StyledLabel>{label}</StyledLabel>
                <RenderIf isTrue={!!notification}>
                    <StyledNotification>{notification}</StyledNotification>
                </RenderIf>
            </StyledAnchor>
            <RenderIf isTrue={!!icon}>
                <StyledIcon>{icon}</StyledIcon>
            </RenderIf>
        </StyledLi>
    );
}

/**
 * A text-only link within VerticalNavigationSection or VerticalNavigationOverflow.
 * @category Layout
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
                                    isExpanded={isExpanded}
                                />
                            )}
                        </SectionOverflowConsumer>
                    )}
                </SectionConsumer>
            )}
        </NavigationConsumer>
    );
}

VerticalItem.propTypes = {
    /** The text displayed for the navigation item. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A unique identifier for the navigation item. */
    name: PropTypes.string,
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
    name: undefined,
    icon: undefined,
    href: 'javascript:void(0);',
    onClick: () => {},
    notification: null,
    className: undefined,
    style: undefined,
};
