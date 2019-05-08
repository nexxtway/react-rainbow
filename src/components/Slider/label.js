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
    label: PropTypes.node.isRequired,
    sliderId: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    hideLabel: false,
};
