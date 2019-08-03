import React from 'react';
import PropTypes from 'prop-types';
import Chip from '../../Chip';

export default function SelectedFieldsToAssign({ values, onDelete }) {
    return values.map((value, index) => {
        const key = `field-${index}`;
        return (
            <Chip
                key={key}
                className="rainbow-import-records-flow_step-three-chip-field"
                label={value}
                title={value}
                variant="neutral"
                onDelete={() => onDelete(value)}
            />
        );
    });
}

SelectedFieldsToAssign.propTypes = {
    values: PropTypes.array,
    onDelete: PropTypes.func,
};

SelectedFieldsToAssign.defaultProps = {
    values: [],
    onDelete: () => {},
};
