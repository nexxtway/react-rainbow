import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Label(props) {
    const {
        label,
        inputId,
        disabled,
        id,
    } = props;

    const getLabelClassNames = () => classnames('rainbow-input-radio_label', {
        'rainbow-input-radio_label--disabled': disabled,
    });

    return (
        <label className="rainbow-input-radio_label-container" htmlFor={inputId} id={id}>
            <span className="rainbow-input-radio_faux" />
            <span className={getLabelClassNames()}>{label}</span>
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    id: undefined,
};
