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
            <ButtonIcon iconName="utility:chevrondown" variant="border" style={{ backgroundColor: '#ffffff' }} />
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
                <ButtonIcon iconName="utility:add" variant="border" style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:edit" variant="border" style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:paste" variant="border" style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:chevrondown" variant="border" style={{ backgroundColor: '#ffffff' }} />
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
                <ButtonIcon iconName="utility:chevrondown" variant="border" disabled style={{ backgroundColor: '#ffffff' }} />
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
                <ButtonIcon iconName="utility:add" variant="border" style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:edit" variant="border" style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:paste" variant="border" disabled style={{ backgroundColor: '#ffffff' }} />
                <ButtonIcon iconName="utility:chevrondown" variant="border" disabled style={{ backgroundColor: '#ffffff' }} />
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
                <ButtonIcon iconName="utility:chevrondown" variant="borderInverse" />
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
                <ButtonIcon iconName="utility:add" variant="borderInverse" />
                <ButtonIcon iconName="utility:edit" variant="borderInverse" />
                <ButtonIcon iconName="utility:paste" variant="borderInverse" />
                <ButtonIcon iconName="utility:chevrondown" variant="borderInverse" />
            </ButtonGroup>
        </div>
    </div>