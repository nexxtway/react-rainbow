import React from 'react';
import PropTypes from 'prop-types';
import { StyledChip } from './styled';

function Chips(props) {
    const { value, variant, onDelete } = props;
    if (!value) {
        return null;
    }
    if (Array.isArray(value)) {
        return value.map(val => (
            <StyledChip
                key={val.name}
                label={val.label}
                variant={variant}
                onDelete={() => onDelete(val)}
            />
        ));
    }
    return <StyledChip label={value.label} variant={variant} onDelete={() => onDelete(value)} />;
}

Chips.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                label: PropTypes.string,
            }),
        ),
    ]),
    variant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    onDelete: PropTypes.func,
};

Chips.defaultProps = {
    value: undefined,
    variant: 'base',
    onDelete: () => {},
};

export default Chips;
