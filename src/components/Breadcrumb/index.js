/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from './../RenderIf';
import StyledAnchor from './styled/anchor';
import StyledButton from './styled/button';
import StyledLi from './styled/li';

/**
 * An item in the hierarchy path of the page the user is on.
 * @category Layout
 */
export default function Breadcrumb(props) {
    const { href, label, onClick, disabled, className, style } = props;

    return (
        <StyledLi className={className} style={style}>
            <RenderIf isTrue={!!href}>
                <StyledAnchor disabled={disabled} href={href} aria-disabled={!!disabled}>
                    {label}
                </StyledAnchor>
            </RenderIf>
            <RenderIf isTrue={onClick && !href}>
                <StyledButton disabled={disabled} onClick={onClick} aria-disabled={!!disabled}>
                    {label}
                </StyledButton>
            </RenderIf>
        </StyledLi>
    );
}

Breadcrumb.propTypes = {
    /** The text label for the breadcrumb. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The URL of the page that the breadcrumb goes to. */
    href: PropTypes.string,
    /** The action triggered when the breadcrumb is clicked. */
    onClick: PropTypes.func,
    /** Specifies that a breadcrumb element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    label: undefined,
    href: undefined,
    onClick: () => {},
    disabled: false,
    className: undefined,
    style: undefined,
};
