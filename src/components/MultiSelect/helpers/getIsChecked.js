import React from 'react';

export default function getIsChecked(value, children) {
    if (value.length === 0) {
        return false;
    }

    let optionCount = 0;
    React.Children.forEach(children, child => {
        const { variant } = child.props;
        if (variant === 'default') {
            optionCount += 1;
        }
    });

    if (value.length === optionCount) {
        return true;
    }

    return 'indeterminate';
}
