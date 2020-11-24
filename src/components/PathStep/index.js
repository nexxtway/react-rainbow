/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function PathStep(props) {
    return <></>;
}

PathStep.propTypes = {
    /** The name of the PathStep. */
    name: PropTypes.string,
    /** The label of the PathStep. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Boolean indicating whether the PathStep has error. */
    hasError: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

PathStep.defaultProps = {
    name: undefined,
    label: undefined,
    hasError: false,
    className: undefined,
    style: undefined,
};
