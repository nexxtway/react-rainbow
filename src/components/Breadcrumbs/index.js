/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Breadcrumbs extends Component {
    getContainerClass() {
        return classnames('slds-breadcrumb slds-list_horizontal slds-wrap', this.props.className);
    }

    render() {
        const { children, style } = this.props;
        return (
            <nav aria-label="Breadcrumbs" style={style}>
                <ol className={this.getContainerClass()}>
                    { children }
                </ol>
            </nav>
        );
    }
}

Breadcrumbs.propTypes = {
    /** This is what will be displayed inside the breadcrumbs. It is a list of
     Breadcrumb component childrens */
    children: PropTypes.node,
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { fontFamily: ‘helvetica’ }) */
    style: PropTypes.object,
};
