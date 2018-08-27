import React from 'react';
import Avatar from 'react-slds/components/Avatar';

export default function ButtonExample() {
    return (
        <div>
            <Avatar
                src="images/avatar1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large" />

            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro" />

            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="standard:account"
                variant="circle" />

            <Avatar
                src="images/wrong.jpg"
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe" />
        </div>
    );
}
