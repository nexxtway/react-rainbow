import React from 'react';

export default function resolveDatasets(children) {
    return React.Children.map(children, (child) => {
        const {
            props: {
                type,
                values,
                title,
                backgroundColor,
                borderColor,
                fill,
                stack,
            },
        } = child;

        const lineColor = borderColor || backgroundColor;

        return {
            type,
            data: values,
            label: title,
            backgroundColor,
            borderColor: lineColor,
            fill,
            stack,
        };
    }, null);
}
