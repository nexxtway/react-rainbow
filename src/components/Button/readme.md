##### simple buttons

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" >
        <div className="slds-m-horizontal_medium">
            <Button label="Button Base" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Neutral" variant="neutral" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Outline Brand" variant="outline-brand" />
        </div>
    </div>


##### button variants

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" >
        <div className="slds-m-horizontal_medium">
            <Button label="Button Brand" onClick={() => alert('clicked!')} variant="brand" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Success" onBlur={ () => alert('blurred!') } variant="success" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Destructive" variant="destructive" />
        </div>
    </div>


##### button shaded

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" >
        <div className="slds-m-horizontal_medium">
            <Button shaded label="Button Brand" onClick={() => alert('clicked!')} variant="brand" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button shaded label="Button Success" onBlur={ () => alert('blurred!') } variant="success" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button shaded label="Button Destructive" variant="destructive" />
        </div>
    </div>


##### buttons with icon
    // more details about how to use react-font-awesome
    // visit https://github.com/FortAwesome/react-fontawesome
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { 
        faCoffee,
        faCheck, 
        faArrowRight,
    } = require('@fortawesome/free-solid-svg-icons');
    
    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" >
        <div className="slds-m-horizontal_medium">
            <Button>
                <FontAwesomeIcon icon={faCoffee} className="slds-button__icon_left"/>
                Button base
            </Button>
        </div>
        <div className="slds-m-horizontal_medium">
            <Button 
                variant="neutral">
                Button with right icon
                <FontAwesomeIcon icon={faCheck} className="slds-button__icon_right"/>
            </Button>    
        </div>
        <div className="slds-m-horizontal_medium">
            <Button 
                variant="brand">
                Brand button with right icon
                <FontAwesomeIcon icon={faArrowRight} className="slds-button__icon_right"/>
            </Button>    
        </div>
    </div>


##### disabled buttons

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" >
        <div className="slds-m-horizontal_medium">
            <Button label="Button Base Disabled" disabled />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Neutral Disabled" variant="neutral" disabled />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Brand Disabled" variant="brand" disabled />
        </div>
    </div>


##### buttons inverse

    const buttonsContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-vertical_large slds-align_absolute-center" style={buttonsContainerStyles}>
        <div className="slds-m-horizontal_medium">
            <Button label="Button Inverse" variant="inverse" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Button 
                label="Button Inverse with icon"
                variant="inverse"
                iconName="utility:add" 
                iconPosition="left" />
        </div>
    </div>
