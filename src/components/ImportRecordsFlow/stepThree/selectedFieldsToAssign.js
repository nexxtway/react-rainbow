import React from 'react';
import PropTypes from 'prop-types';
import StyledChip from './styled/chip';

export default function SelectedFieldsToAssign({ values, onDelete, borderRadius }) {
    return values.map((value, index) => {
        const key = `field-${index}`;
        return (
            <StyledChip
                key={key}
                label={value}
                title={value}
                variant="neutral"
                onDelete={() => onDelete(value)}
                borderRadius={borderRadius}
            />
        );
    });
}

SelectedFieldsToAssign.propTypes = {
    values: PropTypes.array,
    onDelete: PropTypes.func,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

SelectedFieldsToAssign.defaultProps = {
    values: [],
    onDelete: () => {},
    borderRadius: 'rounded',
};
