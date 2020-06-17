import React from 'react';

export default function resolveDatasets(children) {
    return React.Children.map(
        children,
        child => {
            const { values, title, datalabels, ...rest } = child.props;

            return {
                data: values,
                label: title,
                datalabels,
                ...rest,
            };
        },
        null,
    );
}
