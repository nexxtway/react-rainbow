import React from 'react';
import Avatar from 'react-slds/components/Avatar';

export default function AvatarExample() {
    return (
        <div>
            <Avatar
                className="slds-m-horizontal_medium"
                src="images/avatar1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large" />

            <Avatar
                className="slds-m-horizontal_medium"
                assistiveText="Jose Leandro"
                title="Jose Leandro" />

            <Avatar
                className="slds-m-horizontal_medium"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="standard:account"
                variant="circle" />

            <Avatar
                className="slds-m-horizontal_medium"
                src="images/wrong.jpg"
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe" />
        </div>
    );
}
