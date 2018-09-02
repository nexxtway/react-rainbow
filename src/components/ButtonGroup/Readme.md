##### button group

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faAngleDown,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button label="Refresh" variant="neutral" />
                <Button label="Edit" variant="neutral" />
                <Button label="Save" variant="neutral" />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button label="Refresh" variant="outline-brand" />
                <Button label="Edit" variant="outline-brand" />
                <Button label="Save" variant="outline-brand" />
                <Button variant="outline-brand">
                    <FontAwesomeIcon icon={faAngleDown} />
                </Button>
            </ButtonGroup>
        </div>
    </div>


##### button group with overflow menu icon

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faAngleDown,
        faCogs,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-p-vertical_large slds-align_absolute-center slds-m-horizontal_medium">
        <ButtonGroup>
            <Button label="Refresh" variant="neutral" />
            <Button label="Edit" variant="neutral" />
            <Button label="Save" variant="neutral" />
            <Button variant="neutral">
                <FontAwesomeIcon icon={faAngleDown} />
            </Button>
            <ButtonMenu
                buttonVariant="neutral"
                menuAlignment="right"
                menuSize="x-small"
                label={<FontAwesomeIcon icon={faCogs} />}>

                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
            </ButtonMenu>
        </ButtonGroup>
    </div>


##### button group with icon

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faEdit,
        faAngleDown,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button
                    label="Add"
                    variant="neutral"
                    iconName="utility:add" 
                    iconPosition="left" />
                <Button
                    label="Edit"
                    variant="neutral"
                    iconName="utility:edit" 
                    iconPosition="left" />
                <Button
                    label="Paste"
                    variant="neutral"
                    iconName="utility:paste"
                    iconPosition="left" />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button variant="neutral">
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
                <Button variant="neutral">
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button variant="neutral">
                    <FontAwesomeIcon icon={faAngleDown} />
                </Button>
            </ButtonGroup>
        </div>
    </div>

##### button group with button disabled

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button label="Refresh" variant="neutral" />
                <Button label="Edit" variant="neutral" />
                <Button label="Save" variant="neutral" disabled />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button 
                    label="Add"
                    variant="neutral"
                    iconName="utility:add" 
                    iconPosition="left" />
                <Button
                    label="Edit"
                    variant="neutral"
                    iconName="utility:edit" 
                    iconPosition="left"
                    disabled  />
                <Button
                    label="Paste"
                    variant="neutral"
                    iconName="utility:paste"
                    iconPosition="left"
                    disabled />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
            </ButtonGroup>
        </div>
    </div>


##### buttons group with button inverse

    const buttonsContainerStyles = {
        backgroundColor: '#16325c',
        borderRadius: '0.25rem',
    };

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap" style={buttonsContainerStyles}>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button label="Refresh" variant="inverse" />
                <Button label="Edit" variant="inverse" />
                <Button label="Save" variant="inverse" />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button 
                    label="Add"
                    variant="inverse"
                    iconName="utility:add" 
                    iconPosition="left" />
                <Button
                    label="Edit"
                    variant="inverse"
                    iconName="utility:edit" 
                    iconPosition="left" />
                <Button
                    label="Paste"
                    variant="inverse"
                    iconName="utility:paste"
                    iconPosition="left" />
            </ButtonGroup>
        </div>
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
            </ButtonGroup>
        </div>
    </div>