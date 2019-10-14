/* eslint-disable no-script-url, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '../Sidebar/context';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledIcon from './styled/icon';
import StyledLabel from './styled/label';
import StyledAnchorContent from './styled/anchorContent';
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
        <StyledContainer isSelected={isSelected} className={className} style={style}>
            <StyledAnchorContent
                href={href}
                onClick={hanldeOnClick}
                aria-current={getAriaCurrent()}
            >
                <StyledIcon isSelected={isSelected}>{icon}</StyledIcon>
                <RenderIf isTrue={!!label}>
                    <StyledLabel isSelected={isSelected}>{label}</StyledLabel>
                </RenderIf>
            </StyledAnchorContent>
        </StyledContainer>
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
    href: 'javascript:void(0);',
    onClick: () => {},
    className: undefined,
    style: undefined,
};

export default withContext(SidebarItem);
