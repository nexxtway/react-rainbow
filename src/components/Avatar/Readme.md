avatar base

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar1.jpg"
                alt="Jose Leandro"
                initials="JL"
                title="Jose Leandro"
                size="large" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                alt="Tahimi Leon"
                initials="TL"
                title="Tahimi Leon"
                size="medium" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar3.jpg"
                alt="Jonh Doe"
                initials="JD"
                title="Jonh Doe"
                size="small" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                alt="Jane Doe"
                initials="JD"
                title="Jane Doe"
                size="x-small" />

        </div>
    </div>


avatar circle

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar1.jpg"
                alt="Jose Leandro"
                initials="JL"
                title="Jose Leandro"
                size="large" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                alt="Tahimi Leon"
                initials="TL"
                title="Tahimi Leon"
                size="medium" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar3.jpg"
                alt="Jonh Doe"
                initials="JD"
                title="Jonh Doe"
                size="small" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                alt="Jane Doe"
                initials="JD"
                title="Jane Doe"
                size="x-small" />

        </div>
    </div>


fallback user icon

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar title="Jose Leandro" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar title="Tahimi Leon" />

        </div>

    </div>


fallback user initials

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="src/path/wrong.jpg"
                alt="Jane Doe"
                initials="JD"
                title="Jane Doe" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="src/path/wrong.jpg"
                alt="Jane Doe"
                initials="JD"
                title="Jane Doe" />

        </div>
    </div>


fallback entity icon

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                iconName="custom:custom1"
                title="Heart" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                iconName="custom:custom1"
                title="Heart" />

        </div>
    </div>


fallback entity initials

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                title="Heart" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                title="Heart" />

        </div>
    </div>


fallback user initials inverse

    const avatarContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center" style={avatarContainerStyles}>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="src/path/wrong.jpg"
                alt="Tahimi Leon"
                initials="TL"
                title="Tahimi Leon" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="src/path/wrong.jpg"
                alt="Leandro Torres"
                initials="LT"
                title="Leandro Torres" />

        </div>
    </div>
