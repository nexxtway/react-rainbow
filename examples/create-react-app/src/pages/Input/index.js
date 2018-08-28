import React from 'react';
import Input from 'react-slds/components/Input';

export default function InputExample() {
    return (
        <div>
            <Input
                className="slds-m-around_large"
                label="Input Label"
                placeholder="Placeholder text" />

            <Input
                className="slds-m-around_large"
                label="Input label"
                placeholder="Input with left icon"
                iconName="utility:search"
                iconPosition="left" />

            <Input
                className="slds-m-around_large"
                label="Input label"
                placeholder="Input with right icon"
                iconName="utility:search"
                iconPosition="right" />

            <Input
                className="slds-m-around_large"
                label="Input label"
                placeholder="Placeholder text with icon"
                iconName="utility:error"
                iconPosition="left"
                error="This Field is Required" />

        </div>
    );
}
