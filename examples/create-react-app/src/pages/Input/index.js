import React from 'react';
import Input from 'react-slds/components/Input';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
                <Input
                    label="Input Label"
                    placeholder="Placeholder text" />
            </div>
            <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
                <div className="slds-p-bottom_medium">
                    <Input
                        label="Input label"
                        placeholder="Input with left icon"
                        iconName="utility:search"
                        iconPosition="left" />

                </div>
                <Input
                    label="Input label"
                    placeholder="Input with right icon"
                    iconName="utility:search"
                    iconPosition="right" />
            </div>
            <div className="slds-p-vertical_large slds-p-horizontal_xx-large">
                <div className="slds-p-bottom_medium">
                    <Input
                        label="Input label"
                        placeholder="Placeholder text"
                        error="This Field is Required" />

                </div>
                <Input
                    label="Input label"
                    placeholder="Placeholder text with icon"
                    iconName="utility:error"
                    iconPosition="left"
                    error="This Field is Required" />
            </div>
        </div>
    );
}
