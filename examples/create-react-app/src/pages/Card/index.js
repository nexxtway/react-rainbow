import React from 'react';
import Card from 'react-slds/components/Card';
import Button from 'react-slds/components/Button';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <Card className="slds-card_boundary">
                    <img
                        src="images/illustrations/empty-state-assistant.svg"
                        className="slds-p-vertical_x-large slds-align_absolute-center"
                        alt="the wood" />
                </Card>

            </div>
            <div className="slds-m-horizontal_medium">
                <Card
                    className="slds-card_boundary"
                    iconName="standard:groups"
                    title="Contacts (3)"
                    footer="View all"
                    actions={<Button variant="neutral" label="New" />} >

                    <h1 className="slds-p-bottom_medium slds-text-heading_x-small">Anything in the body</h1>
                </Card>
            </div>
            <div className="slds-m-horizontal_medium">
                <Card
                    className="slds-card_boundary"
                    isLoading
                    iconName="standard:task"
                    title="Task"
                    actions={<Button variant="neutral" label="New" />} />
            </div>
        </div>
    );
}
