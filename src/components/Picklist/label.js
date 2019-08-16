import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import RequiredAsterisk from '../RequiredAsterisk';

export default function Label(props) {
    const { label, inputId, id } = props;

    const getLabelClassNames = () => {
        const { hideLabel } = props;
        return classnames('rainbow-picklist_input-label', {
            'rainbow-picklist_input-label--hide': hideLabel,
        });
    };

    if (!label) return null;

    return (
        <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
            {/* <RequiredAsterisk required={required} /> */}
            {label}
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    inputId: PropTypes.string.isRequired,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    id: undefined,
    label: null,
    hideLabel: false,
};
