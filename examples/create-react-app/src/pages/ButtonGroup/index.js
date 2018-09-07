import React from 'react';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import Button from 'react-rainbow-components/components/Button';

export default function ButtonGroupExample() {
    return (
        <div>
            <ButtonGroup>
                <Button label="Refresh" variant="outline-brand" />
                <Button label="Edit" variant="outline-brand" />
                <Button label="Save" variant="outline-brand" />
            </ButtonGroup>
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
    );
}
