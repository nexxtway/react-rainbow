import React from 'react';
import { StyledChip } from '../styled';

export default function getChips(value, variant, deleteCallback) {
    if (!value) {
        return null;
    }
    if (Array.isArray(value)) {
        return value.map(val => (
            <StyledChip
                key={val.name}
                label={val.label}
                variant={variant}
                onDelete={() => deleteCallback(val)}
            />
        ));
    }
    return (
        <StyledChip label={value.label} variant={variant} onDelete={() => deleteCallback(value)} />
    );
}
