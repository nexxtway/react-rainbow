badges without icon

    <div className="slds-p-vertical_large slds-align--absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Badge label="Default Badge" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge label="Darker Badge" variant="inverse" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge label="Lightest Badge" variant="lightest" />
        </div>
    </div>

badges with icon

    <div className="slds-p-vertical_large slds-align--absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Badge
                variant="lightest"
                label="Icon on the left"
                iconName="utility:world" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge
                variant="lightest"
                label="Icon on the right"
                iconName="utility:world"
                iconPosition="right" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge variant="lightest" iconName="utility:world" />
        </div>
    </div>