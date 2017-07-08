/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ButtonGroup extends Component {
    getContainerClass() {
        const { className, variant } = this.props;

        return classnames({
            'slds-button-group': variant === 'group',
            'slds-button-group-list': variant === 'list',
        }, className);
    }

    render() {
        const { children, style } = this.props;

        return (
            <div className={this.getContainerClass()} style={style} role="group">
                { children }
            </div>
        );
    }
}

ButtonGroup.propTypes = {
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** The list of buttons component or button element */
    children: PropTypes.node,
    /** It is the button group variant */
    variant: PropTypes.oneOf(['group', 'list']),
};

ButtonGroup.defaultProps = {
    variant: 'group',
};
