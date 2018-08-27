import React from 'react';
import Icon from 'react-slds/components/Icon';

export default function ButtonExample() {
    return (
        <div>
            <div className="slds-m-horizontal_medium">
                <Icon
                    iconName="action:add_photo_video"
                    assistiveText="camera icon"
                    title="camera icon"
                    size="large" />

            </div>
            <div className="slds-m-horizontal_medium">
                <Icon
                    iconName="custom:custom22"
                    assistiveText="phone icon"
                    title="phone icon" />

            </div>
            <div className="slds-m-horizontal_medium">
                <Icon iconName="doctype:html"
                    assistiveText="html icon"
                    title="html icon" />

            </div>
            <div className="slds-m-horizontal_medium">
                <Icon
                    iconName="standard:address"
                    assistiveText="address icon"
                    title="address icon"
                    size="medium" />

            </div>
            <div className="slds-m-horizontal_medium">
                <Icon
                    iconName="utility:activity"
                    assistiveText="activity icon"
                    title="activity icon"
                    size="large" />

            </div>
            <div className="slds-m-horizontal_medium">
                <Icon
                    iconName="utility:warning"
                    title="warning icon"
                    variant="warning"
                    size="large" />

            </div>
        </div>
    );
}
