import React from 'react';
import { normalizeValue } from '.';

export default function getAllValues(children) {
    const values = [];
    React.Children.forEach(children, child => {
        const { label: childLabel, name, value: childValue, variant: childVariant } = child.props;
        if (childVariant !== 'default') {
            return;
        }
        values.push({
            label: childLabel,
            name,
            value: childValue,
        });
    });
    return normalizeValue(values);
}
