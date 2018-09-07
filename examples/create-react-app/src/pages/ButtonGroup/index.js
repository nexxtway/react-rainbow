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
                <Button label="Add" variant="neutral" />
                <Button label="Edit" variant="neutral" />
                <Button label="Paste" variant="neutral" />
            </ButtonGroup>
        </div>
    );
}
