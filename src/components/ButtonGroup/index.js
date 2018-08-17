import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/** Button groups are used to bunch together buttons with similar actions */
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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The list of buttons component or button element */
    children: PropTypes.node,
};

ButtonGroup.defaultProps = {
    className: undefined,
    style: {},
    children: null,
};
