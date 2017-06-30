/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Badge extends Component {
    getClass() {
        return classnames('slds-badge', this.props.className);
    }

    render() {
        const { label, style } = this.props;

        return (
            <span className={this.getClass()} style={style}>
                { label }
            </span>
        );
    }
}

Badge.propTypes = {
    /** Label for the button */
    label: PropTypes.string.isRequired,
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { fontFamily: ‘helvetica’ }) */
    style: PropTypes.object,
};
