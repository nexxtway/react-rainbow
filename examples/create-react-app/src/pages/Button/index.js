import React from 'react';
import Button from 'react-slds/components/Button';

export default function ButtonExample() {
    return (
        <div>
            <Button
                label="Hello World!"
                variant="brand"
                onClick={() => alert('Hello World!')} />

            <Button
                label="Button with right icon"
                variant="neutral"
                iconName="utility:forward"
                iconPosition="right" />

        </div>
    );
}
