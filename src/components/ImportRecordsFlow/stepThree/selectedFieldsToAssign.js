import React from 'react';
import PropTypes from 'prop-types';
import StyledChip from './styled/chip';

export default function SelectedFieldsToAssign({ values, onDelete }) {
    return values.map((value, index) => {
        const key = `field-${index}`;
        return (
            <StyledChip
                key={key}
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
