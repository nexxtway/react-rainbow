/* eslint-disable import/no-extraneous-dependencies,no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '../MenuItem';
import ButtonMenu from '../ButtonMenu';
import { uniqueId } from '../../libs/utils';
import './styles.css';

/** @category Layout */
export default function Breadcrumb(props) {
    const {
        href,
        label,
        onClick,
        disabled,
        overflowMenu,
        className,
        style,
    } = props;
    const getClassNames = () => classnames(
        'rainbow-breadcrumb',
        { 'rainbow-breadcrumb-disabled': disabled },
        className,
    );

    const MenuItems = () => overflowMenu.map(menuItem => (
                <MenuItem
                    key={uniqueId('breadcrumb-menu-item')}
                    label={menuItem.label}
                    onClick={menuItem.onClick} />
            ));

    const BreadcrumbItem = () => {
        if (overflowMenu.length) {
            return (
                <ButtonMenu buttonSize="x-small" icon={<FontAwesomeIcon icon={faEllipsisH} />}>
                    <MenuItems />
                </ButtonMenu>
            );
        }
        return (
            <a
                href={href}
                onClick={onClick}
                aria-disabled={!!disabled}>
                {label}
            </a>
        );
    };

    return (
        <li className={getClassNames()} style={style}>
            <BreadcrumbItem />
        </li>
    );
}

Breadcrumb.propTypes = {
    /** The text label for the breadcrumb. */
    label: PropTypes.string,
    /** The URL of the page that the breadcrumb goes to. */
    href: PropTypes.string,
    /** The action triggered when the breadcrumb is clicked. */
    onClick: PropTypes.func,
    /** Specifies that a breadcrumb element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The content of the OverflowMenu. */
    overflowMenu: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        }),
    ),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    label: undefined,
    href: 'javascript:void(0);',
    onClick: () => {},
    disabled: false,
    overflowMenu: [],
    className: undefined,
    style: undefined,
};
