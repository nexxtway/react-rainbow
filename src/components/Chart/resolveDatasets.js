import React from 'react';

export default function resolveDatasets(children) {
    return React.Children.map(
        children,
        child => {
            const { values, title, ...rest } = child.props;

            return {
                data: values,
                label: title,
                ...rest,
            };
        },
        null,
    );
}
