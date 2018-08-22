avatar base

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                size="medium" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar3.jpg"
                assistiveText="Jonh Doe"
                title="Jonh Doe"
                size="small" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                assistiveText="Jane Doe"
                title="Jane Doe"
                size="x-small" />

        </div>
    </div>


avatar circle

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar1.jpg"
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                size="large"
                variant="circle" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                size="medium"
                variant="circle" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar3.jpg"
                title="Jonh Doe"
                size="small"
                variant="circle" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/avatar2.jpg"
                assistiveText="Jane Doe"
                title="Jane Doe"
                size="x-small"
                variant="circle" />

        </div>
    </div>


fallback user icon

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle" />

        </div>

    </div>


fallback icon

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="action:call" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="custom:custom1" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="doctype:ai" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="standard:account" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jose Leandro"
                title="Jose Leandro"
                iconName="utility:activity" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle"
                iconName="action:call" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle"
                iconName="custom:custom1" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle"
                iconName="doctype:ai" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle"
                iconName="standard:account" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Tahimi Leon"
                title="Tahimi Leon"
                variant="circle"
                iconName="utility:activity" />

        </div>

    </div>


fallback user initials

    <div className="slds-p-vertical_x-large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Avatar
                src="images/wrong.jpg"
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jane Doe"
                initials="JD"
                title="Jane Doe"
                variant="circle" />

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
                src="images/wrong.jpg"
                assistiveText="Jane Doe"
                initials="TL"
                title="Tahimi Leon"
                initialsVariant="inverse" />

        </div>
        <div className="slds-m-horizontal_medium">
            <Avatar
                assistiveText="Jane Doe"
                initials="LT"
                title="Leandro Torres"
                variant="circle"
                initialsVariant="inverse" />

        </div>
    </div>
