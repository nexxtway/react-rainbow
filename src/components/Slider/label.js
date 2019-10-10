import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Label(props) {
    const { label, sliderId, hideLabel } = props;

    const getLabelClassNames = () =>
        classnames('rainbow-slider_label', {
            'rainbow-slider_label--hide-label': hideLabel,
        });

    return (
        <label className={getLabelClassNames()} htmlFor={sliderId}>
            {label}
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    sliderId: PropTypes.string,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    label: undefined,
    sliderId: undefined,
    hideLabel: false,
};
