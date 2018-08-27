import React from 'react';
import ButtonGroup from 'react-slds/components/ButtonGroup';
import Button from 'react-slds/components/Button';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <ButtonGroup>
                    <Button label="Refresh" variant="outline-brand" />
                    <Button label="Edit" variant="outline-brand" />
                    <Button label="Save" variant="outline-brand" />
                </ButtonGroup>
            </div>
            <div className="slds-m-horizontal_medium">
                <ButtonGroup>
                    <Button
                        label="Add"
                        variant="neutral"
                        iconName="utility:add"
                        iconPosition="left" />
                    <Button
                        label="Edit"
                        variant="neutral"
                        iconName="utility:edit"
                        iconPosition="left" />
                    <Button
                        label="Paste"
                        variant="neutral"
                        iconName="utility:paste"
                        iconPosition="left" />
                </ButtonGroup>
            </div>
        </div>
    );
}
