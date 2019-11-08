import React from 'react';
import PropTypes from 'prop-types';
import StyledFaux from './styled/faux';
import HiddenElement from '../../../Structural/hiddenElement';

export default function Label(props) {
    const { label, inputId, id } = props;

    return (
        <label htmlFor={inputId} id={id}>
            <StyledFaux className="rainbow-table-input-checkbox_faux" />
            <HiddenElement>{label}</HiddenElement>
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    hideLabel: false,
    id: undefined,
};
