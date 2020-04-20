import React from 'react';
import PropTypes from 'prop-types';
import StyledFaux from './styled/faux';
import HiddenElement from '../Structural/hiddenElement';

export default function Label(props) {
    const { label, inputId } = props;

    return (
        <label data-id="table-input-checkbox_label" htmlFor={inputId}>
            <StyledFaux className="rainbow-table-input-checkbox_faux" />
            <HiddenElement>{label}</HiddenElement>
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
};
