simple buttons

    <div className="slds-p-top_large slds-p-bottom_large slds-align--absolute-center slds-wrap" >
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Base" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Neutral" variant="neutral" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Outline Brand" variant="outline-brand" />
        </div>
    </div>


varied buttons

    <div className="slds-p-top_large slds-p-bottom_large slds-align--absolute-center slds-wrap" >
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Brand" onClick={() => alert('clicked!')} variant="brand" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Success" onBlur={ () => alert('blurred!') } variant="success" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Destructive" variant="destructive" />
        </div>
    </div>


buttons with icon

    <div className="slds-p-top_large slds-p-bottom_large slds-align--absolute-center slds-wrap" >
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button 
                label="Button base"
                iconName="utility:check" 
                iconPosition="left" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button 
                label="Button with right icon" 
                variant="neutral"
                iconName="utility:forward" 
                iconPosition="right" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button 
                label="Button with left icon"
                variant="brand"
                iconName="utility:add" 
                iconPosition="left" />
        </div>
    </div>


disabled buttons

    <div className="slds-p-top_large slds-p-bottom_large slds-align--absolute-center slds-wrap" >
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Base Disabled" disabled />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Neutral Disabled" variant="neutral" disabled />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Brand Disabled" variant="brand" disabled />
        </div>
    </div>


buttons inverse

    const buttonsContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-top_large slds-p-bottom_large slds-align--absolute-center" style={buttonsContainerStyles}>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button label="Button Inverse" variant="inverse" />
        </div>
        <div className="slds-m-right_medium slds-m-left_medium">
            <Button 
                label="Button Inverse with icon"
                variant="inverse"
                iconName="utility:add" 
                iconPosition="left" />
        </div>
    </div>
