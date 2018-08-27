import React from 'react';
import Button from 'react-slds/components/Button';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <Button
                    label="Hello World!"
                    variant="brand"
                    onClick={() => alert('Hello World!')} />

            </div>
            <div className="slds-m-horizontal_medium">
                <Button
                    label="Button with right icon"
                    variant="neutral"
                    iconName="utility:forward"
                    iconPosition="right" />

            </div>
        </div>
    );
}
