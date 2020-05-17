/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../Sidebar/context';
import RenderIf from '../RenderIf';
import StyledLi from './styled/li';
import StyledAnchorContent from './styled/anchorContent';
import StyledButtonContent from './styled/buttonContent';
import StyledContainer from './styled/container';
import ItemContent from './itemContent';
/**
 * @category Layout
 */
function SidebarItem(props) {
    const { label, icon, name, href, onClick, className, style, selectedItem, onSelect } = props;
    const isSelected = name === selectedItem;

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
        <StyledLi
            data-id="sidebar-item-li"
            isSelected={isSelected}
            className={className}
            style={style}
        >
            <StyledContainer isSelected={isSelected}>
                <RenderIf isTrue={!!href}>
                    <StyledAnchorContent
                        data-id="sidebar-item-clickable-element"
                        href={href}
                        onClick={hanldeOnClick}
                        aria-current={getAriaCurrent()}
                    >
                        <ItemContent isSelected={isSelected} label={label} icon={icon} />
                    </StyledAnchorContent>
                </RenderIf>
                <RenderIf isTrue={!href}>
                    <StyledButtonContent
                        data-id="sidebar-item-clickable-element"
                        onClick={hanldeOnClick}
                        aria-current={getAriaCurrent()}
                    >
                        <ItemContent isSelected={isSelected} label={label} icon={icon} />
                    </StyledButtonContent>
                </RenderIf>
            </StyledContainer>
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
    name: undefined,
    label: undefined,
    icon: null,
    href: undefined,
    onClick: () => {},
    className: undefined,
    style: undefined,
};

export default withContext(SidebarItem);
