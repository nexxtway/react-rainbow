import React from 'react';
import Card from 'react-slds/components/Card';
import Button from 'react-slds/components/Button';

export default function CardExample() {
    return (
        <div>
            <Card>
                <img
                    src="assets/images/illustrations/empty-state-assistant.svg"
                    className="slds-p-vertical_x-large slds-align_absolute-center"
                    alt="the wood" />
            </Card>
            <Card
                iconName="standard:groups"
                title="Contacts (3)"
                footer="View all"
                actions={<Button variant="neutral" label="New" />}>

                <h1 className="slds-p-bottom_medium slds-text-heading_x-small">Anything in the body</h1>
            </Card>
            <Card
                className="slds-truncate_container_50"
                isLoading
                iconName="standard:task"
                title="Task"
                actions={<Button variant="neutral" label="New" />} />

        </div>
    );
}
