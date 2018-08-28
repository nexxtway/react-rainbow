import React from 'react';
import Badge from 'react-slds/components/Badge';

export default function BadgeExample() {
    return (
        <div>
            <Badge label="Default Badge" />
            <Badge
                variant="lightest"
                label="Icon on the left"
                iconName="utility:world" />

            <Badge
                variant="lightest"
                label="Icon on the right"
                iconPosition="right"
                iconName="utility:world" />

            <Badge variant="lightest" iconName="utility:world" />
        </div>
    );
}
