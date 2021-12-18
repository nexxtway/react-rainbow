/* eslint-disable no-script-url, react/prop-types */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../Sidebar/context';
import RenderIf from '../RenderIf';
import InternalTooltip from '../InternalTooltip';
import useDefaultTooltipConnector from '../InternalTooltip/hooks/useDefaultTooltipConnector';
import StyledLi from './styled/li';
import StyledAnchorContent from './styled/anchorContent';
import StyledButtonContent from './styled/buttonContent';
import ItemContent from './itemContent';
/**
 * @category Layout
 */
function SidebarItem(props) {
    const {
        label,
        icon,
        selectedIcon,
        name,
        href,
        onClick,
        className,
        style,
        selectedItem,
        onSelect,
        tooltip,
        hideSelectedItemIndicator,
    } = props;
    const triggerRef = useRef();
    const tooltipRef = useRef();
    const isSelected = name === selectedItem;
    const currentIcon = isSelected && !!selectedIcon ? selectedIcon : icon;

    const { onMouseEnter, onMouseLeave, isVisible } = useDefaultTooltipConnector({
        tooltipRef,
        triggerRef: () => triggerRef,
    });

    const getAriaCurrent = () => {
        if (isSelected) {
            return 'page';
        }
        return undefined;
    };

    function handleOnClick(event) {
        onClick(event);
        onSelect(event, name);
    }

    return (
        <StyledLi
            data-id="sidebar-item-li"
            isSelected={isSelected}
            className={className}
            style={style}
            hideSelectedItemIndicator={hideSelectedItemIndicator}
        >
            <RenderIf isTrue={href}>
                <StyledAnchorContent
                    data-id="sidebar-item-clickable-element"
                    href={href}
                    onClick={handleOnClick}
                    aria-current={getAriaCurrent()}
                    isSelected={isSelected}
                    ref={triggerRef}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <ItemContent isSelected={isSelected} label={label} icon={currentIcon} />
                </StyledAnchorContent>
            </RenderIf>
            <RenderIf isTrue={!href}>
                <StyledButtonContent
                    data-id="sidebar-item-clickable-element"
                    onClick={handleOnClick}
                    aria-current={getAriaCurrent()}
                    isSelected={isSelected}
                    ref={triggerRef}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <ItemContent isSelected={isSelected} label={label} icon={currentIcon} />
                </StyledButtonContent>
            </RenderIf>
            <RenderIf isTrue={tooltip}>
                <InternalTooltip
                    triggerElementRef={() => triggerRef}
                    isVisible={isVisible}
                    preferredPosition="right"
                    ref={tooltipRef}
                >
                    {tooltip}
                </InternalTooltip>
            </RenderIf>
        </StyledLi>
    );
}

SidebarItem.propTypes = {
    /** A unique identifier for the navigation item. */
    name: PropTypes.string,
    /** The text to show if it is passed. The text displayed for the SidebarItem. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon displayed for the SidebarItem. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** The icon displayed for the SidebarItem when it is selected. It must be a svg icon or a font icon.
     * By default it takes the value of icon prop
     */
    selectedIcon: PropTypes.node,
    /** The URL of the page that the navigation item goes to. */
    href: PropTypes.string,
    /** Event fired when the item is clicked. */
    onClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** A tooltip to show on hover */
    tooltip: PropTypes.node,
};

SidebarItem.defaultProps = {
    name: undefined,
    label: undefined,
    icon: null,
    selectedIcon: null,
    href: undefined,
    onClick: () => {},
    className: undefined,
    style: undefined,
    tooltip: undefined,
};

export default withContext(SidebarItem);
