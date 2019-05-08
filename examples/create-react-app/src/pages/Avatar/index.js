import React from 'react';
import Avatar from 'react-rainbow-components/components/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function AvatarExample() {
    return (
        <div>
            <Avatar
                className="rainbow-m-horizontal_medium"
                src="assets/images/user4.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large"
            />

            <Avatar
                className="rainbow-m-horizontal_medium"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                icon={<FontAwesomeIcon icon={faUser} />}
            />

            <Avatar
                className="rainbow-m-horizontal_medium"
                src="images/wrong.jpg"
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe"
                size="small"
            />

            <Avatar
                className="rainbow-m-horizontal_medium"
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe"
                initialsVariant="inverse"
                size="x-small"
            />
        </div>
    );
}
