button icon base

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:activity" size="large" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:world" size="medium" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" size="small" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:clear" size="x-small" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:ban" size="xx-small" />
        </div>
    </div>


button icon border

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border" size="large" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:broadcast" variant="border" size="medium" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:edit" variant="border" size="small" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:add" variant="border" size="x-small" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border" size="xx-small" />
        </div>
    </div>


button icon filled

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center">
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border-filled" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="brand" />
        </div>
    </div>


button icon disabled

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center">
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="brand" disabled />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border-filled" disabled />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border" disabled />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="container" disabled  />
        </div>
    </div>


button icon inverse

    const buttonsIconContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-vertical_large slds-p-left_medium slds-grid slds-media_center" style={buttonsIconContainerStyles}>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="border-inverse" />
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonIcon iconName="utility:settings" variant="inverse" />
        </div>
    </div>
  