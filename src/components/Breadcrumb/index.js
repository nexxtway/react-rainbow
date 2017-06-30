/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Breadcrumb extends Component {
    getLiClass() {
        return classnames('slds-breadcrumb__item slds-text-title_caps', this.props.className);
    }

    render() {
        const { href, label, onClick, style } = this.props;

        return (
            <li className={this.getLiClass()} style={style}>
                <a href={href} onClick={onClick}>
                    {label}
                </a>
            </li>
        );
    }
}

Breadcrumb.propTypes = {
    /** The href of the anchor */
    href: PropTypes.string,
    /** Label for the breadcrumb */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    /** Callback function fired when the breadcrumb is clicked */
    onClick: PropTypes.func,
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { fontFamily: ‘helvetica’ }) */
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    href: 'javascript:void(0);', // eslint-disable-line no-script-url
};
