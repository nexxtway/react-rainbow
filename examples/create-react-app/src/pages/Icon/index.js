import React from 'react';
import Icon from 'react-slds/components/Icon';

export default function IconExample() {
    return (
        <div>
            <Icon
                className="slds-m-horizontal_medium"
                iconName="action:add_photo_video"
                assistiveText="camera icon"
                title="camera icon"
                size="large" />

            <Icon
                className="slds-m-horizontal_medium"
                iconName="custom:custom22"
                assistiveText="phone icon"
                title="phone icon" />

            <Icon
                className="slds-m-horizontal_medium"
                iconName="doctype:html"
                assistiveText="html icon"
                title="html icon" />

            <Icon
                className="slds-m-horizontal_medium"
                iconName="standard:address"
                assistiveText="address icon"
                title="address icon"
                size="medium" />

            <Icon
                className="slds-m-horizontal_medium"
                iconName="utility:activity"
                assistiveText="activity icon"
                title="activity icon"
                size="large" />

            <Icon
                className="slds-m-horizontal_medium"
                iconName="utility:warning"
                title="warning icon"
                variant="warning"
                size="large" />
        </div>
    );
}
