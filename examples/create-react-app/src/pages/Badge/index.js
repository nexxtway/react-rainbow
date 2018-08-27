import React from 'react';
import Badge from 'react-slds/components/Badge';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <Badge label="Default Badge" />
            </div>
            <div className="slds-m-horizontal_medium">
                <Badge
                    variant="lightest"
                    label="Icon on the left"
                    iconName="utility:world" />
            </div>
            <div className="slds-m-horizontal_medium">
                <Badge
                    variant="lightest"
                    label="Icon on the right"
                    iconPosition="right"
                    iconName="utility:world" />
            </div>
            <div className="slds-m-horizontal_medium">
                <Badge variant="lightest" iconName="utility:world" />
            </div>
        </div>
    );
}
