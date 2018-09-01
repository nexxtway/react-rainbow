##### photo-url

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/user/user1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/user/user2.jpg"
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                size="medium" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/user/user3.jpg"
                assistiveText="Carlos Miguel"
                title="Carlos Miguel"
                size="small" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/user/user4.jpg"
                assistiveText="Jane Doe"
                title="Jane Doe"
                size="x-small" />

        </div>
    </div>


##### fallback user initials

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe" />

        </div>
    </div>


##### fallback user initials inverse

    const avatarContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center" style={avatarContainerStyles}>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe"
                initialsVariant="inverse" />

        </div>
    </div>