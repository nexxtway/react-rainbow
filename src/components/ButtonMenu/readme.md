##### button menu base

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large">
            <ButtonGroup>
                <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
                <ButtonIcon iconName="utility:paste" variant="border-filled" disabled />
                <ButtonMenu menuAlignment="right" menuSize="x-small">
                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                    <MenuItem label="Menu Item Three" />
                    <li className="slds-has-divider_top-space" role="separator"></li>
                    <MenuItem label="Menu Item Four" />
                </ButtonMenu>
            </ButtonGroup>
        </GlobalHeader>
    </div>    


##### button menu with subheaders

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar2.jpg">
            <ButtonGroup>
                <ButtonIcon iconName="utility:add" variant="border-filled" disabled />
                <ButtonIcon iconName="utility:paste" variant="border-filled" disabled />
                <ButtonMenu menuAlignment="right" menuSize="x-small" iconName="utility:settings">
                    <MenuItem label="Menu header" variant="header" />
                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                    <MenuItem label="Menu Item Three" />
                    <MenuItem label="Menu header" variant="header" />
                    <MenuItem label="Menu Item One" />
                    <MenuItem label="Menu Item Two" />
                </ButtonMenu>
            </ButtonGroup>
        </GlobalHeader>
    </div>


##### button menu with icons

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar3.jpg">
            <ButtonGroup className="slds-m-right_medium">
                <ButtonIcon iconName="utility:add" variant="border-filled" disabled />
                <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
                <ButtonMenu menuSize="x-small" menuAlignment="right" iconName="utility:threedots_vertical">
                    <MenuItem 
                        label="Right Icon"
                        iconName="utility:table" 
                        iconPosition="right" />
                    <MenuItem 
                        label="Right Icon"
                        iconName="utility:kanban" 
                        iconPosition="right" />
                    <MenuItem 
                        label="Right Icon"
                        iconName="utility:side_list" 
                        iconPosition="right" />
                </ButtonMenu>
            </ButtonGroup>
            <ButtonMenu menuAlignment="right" menuSize="x-small" iconName="utility:notification">
                <MenuItem 
                    label="Left Icon"
                    iconName="utility:announcement" 
                    iconPosition="left" />
                <MenuItem 
                    label="Left Icon"
                    iconName="utility:announcement" 
                    iconPosition="left" />
                <MenuItem 
                    label="Left Icon"
                    iconName="utility:announcement" 
                    iconPosition="left" />
            </ButtonMenu>
        </GlobalHeader>
    </div>


##### button menu position variants

    <GlobalHeader className="slds-m-bottom_xx-large slds-p-bottom_xx-large" src="images/avatar2.jpg">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
            <ButtonIcon iconName="utility:paste" variant="border-filled" disabled />
            <ButtonMenu menuAlignment="left" menuSize="x-small" iconName="utility:settings">
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu menuAlignment="right" menuSize="x-small" iconName="utility:announcement">
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="slds-m-horizontal_large slds-p-top_xx-large slds-m-bottom_large slds-grid slds-grid_align-end">
        <ButtonMenu menuAlignment="center" menuSize="x-small" iconName="utility:add">
            <MenuItem label="Menu Positioned Center" />
            <MenuItem label="Menu Positioned Center" />
            <MenuItem label="Menu Positioned Center" />
        </ButtonMenu>
    </div>


##### button menu width variants

    <GlobalHeader className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonIcon iconName="utility:database" variant="border-filled" disabled />
            <ButtonMenu menuSize="xx-small" menuAlignment="right" iconName="utility:settings">
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
            </ButtonMenu>
        </ButtonGroup>
        <div className="slds-m-right_medium">
            <ButtonMenu menuAlignment="right" menuSize="x-small" iconName="utility:apps">
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
            </ButtonMenu>
        </div>
        <ButtonMenu menuAlignment="right" menuSize="small" iconName="utility:notification">
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="slds-m-horizontal_large slds-p-top_xx-large slds-m-bottom_large slds-grid slds-grid_align-end">
        <ButtonGroup className="slds-m-right_medium">
            <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
            <ButtonIcon iconName="utility:paste" variant="border-filled" disabled />
            <ButtonMenu menuSize="medium" menuAlignment="right" iconName="utility:add">
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu menuAlignment="right" menuSize="small" iconName="utility:custom_apps">
            <MenuItem label="Menu large" />
            <MenuItem label="Menu large" />
            <MenuItem label="Menu large" />
        </ButtonMenu>
    </div>


##### button menu loading

    <div className="slds-m-bottom_xx-large slds-p-bottom_xx-large">
        <GlobalHeader className="slds-p-bottom_xx-large slds-m-bottom_xx-large" src="images/avatar3.jpg">
            <ButtonGroup>
                <ButtonIcon iconName="utility:add" variant="border-filled" disabled />
                <ButtonIcon iconName="utility:announcement" variant="border-filled" disabled />
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="x-small" iconName="utility:custom_apps"
                    isLoading
                />
            </ButtonGroup>
        </GlobalHeader>
    </div>
