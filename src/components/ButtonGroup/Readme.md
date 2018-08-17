button group

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
            </ButtonGroup>
        </div>
    </div>


button group with overflow menu icon

    <div className="slds-p-vertical_large slds-align_absolute-center slds-m-horizontal_medium">
        <ButtonGroup>
            <Button label="Refresh" variant="neutral" />
            <Button label="Edit" variant="neutral" />
            <Button label="Save" variant="neutral" />
            <ButtonIcon iconName="utility:chevrondown" variant="border-filled" />
        </ButtonGroup>
    </div>


button group with icon

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
                <ButtonIcon iconName="utility:add" variant="border-filled" />
                <ButtonIcon iconName="utility:edit" variant="border-filled" />
                <ButtonIcon iconName="utility:paste" variant="border-filled" />
                <ButtonIcon iconName="utility:chevrondown" variant="border-filled" />
            </ButtonGroup>
        </div>
    </div>

button group with button disabled

    <div className="slds-p-vertical_large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <ButtonGroup>
                <Button label="Refresh" variant="neutral" />
                <Button label="Edit" variant="neutral" />
                <Button label="Save" variant="neutral" disabled />
                <ButtonIcon iconName="utility:chevrondown" variant="border-filled" disabled />
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
                <ButtonIcon iconName="utility:add" variant="border-filled" />
                <ButtonIcon iconName="utility:edit" variant="border-filled" />
                <ButtonIcon iconName="utility:paste" variant="border-filled" disabled />
                <ButtonIcon iconName="utility:chevrondown" variant="border-filled" disabled />
            </ButtonGroup>
        </div>
    </div>


buttons group with button inverse

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
                <ButtonIcon iconName="utility:chevrondown" variant="border-inverse" />
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
                <ButtonIcon iconName="utility:add" variant="border-inverse" />
                <ButtonIcon iconName="utility:edit" variant="border-inverse" />
                <ButtonIcon iconName="utility:paste" variant="border-inverse" />
                <ButtonIcon iconName="utility:chevrondown" variant="border-inverse" />
            </ButtonGroup>
        </div>
    </div>