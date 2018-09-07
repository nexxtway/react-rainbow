import React from 'react';
import Badge from 'react-rainbow-components/components/Badge';

export default function BadgeExample() {
    return (
        <div>
            <Badge label="Default Badge" />
            <Badge variant="lightest" label="Lightest Badge" />
            <Badge variant="inverse" label="Inverse Badge" />
            <Badge variant="outline-brand" label="Outline Badge" />
            <Badge variant="brand" label="Brand Badge" />
        </div>
    );
}
