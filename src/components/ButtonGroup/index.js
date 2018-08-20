import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
* Button groups are used to bunch together buttons with similar actions
*/
export default function ButtonGroup(props) {
    const {
        className,
        style,
        children,
    } = props;
    const getContainerClassName = () => classnames('slds-button-group', className);

    return (
        <div className={getContainerClassName()} style={style} role="group">
            { children }
        </div>
    );
}

ButtonGroup.propTypes = {
    /** The list of buttons component or button element */
    children: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ButtonGroup.defaultProps = {
    children: null,
    className: undefined,
    style: {},
};
