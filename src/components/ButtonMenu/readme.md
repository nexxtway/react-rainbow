button menu base

    <div className="slds-p-vertical_large slds-align_absolute-center" >
        <ButtonGroup>
            <ButtonIcon iconName="utility:add" variant="border-filled" />
            <ButtonIcon iconName="utility:edit" variant="border-filled" />
            <ButtonIcon iconName="utility:paste" variant="border-filled" />
            <ButtonMenu menuAlignment="right" menuSize="x-small">
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
            </ButtonMenu>
        </ButtonGroup>
    </div>


button menu with subheaders

    <div className="slds-p-vertical_large slds-align_absolute-center" >
        <ButtonGroup>
            <ButtonIcon iconName="utility:add" variant="border-filled" />
            <ButtonIcon iconName="utility:edit" variant="border-filled" />
            <ButtonIcon iconName="utility:paste" variant="border-filled" />
            <ButtonMenu menuAlignment="right" menuSize="x-small">
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


button menu with icons

    <div className="slds-p-around_large slds-align_absolute-center" >
        <div className="slds-m-horizontal_xx-large">
            <ButtonMenu menuAlignment="right" menuSize="x-small">
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
        </div>
        <div className="slds-m-horizontal_xx-large">
            <ButtonMenu menuSize="x-small">
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
        </div>
    </div>


button menu position variants

    <div className="slds-p-around_large slds-align_absolute-center" >
        <div className="slds-m-horizontal_xx-large">
            <ButtonMenu menuAlignment="right" menuSize="x-small">
                <MenuItem label="Menu Positioned Right" />
                <MenuItem label="Menu Positioned Right" />
                <MenuItem label="Menu Positioned Right" />
            </ButtonMenu>
        </div>
        <div className="slds-m-horizontal_xx-large">
            <ButtonMenu menuAlignment="center" menuSize="x-small">
                <MenuItem label="Menu Positioned Center" />
                <MenuItem label="Menu Positioned Center" />
                <MenuItem label="Menu Positioned Center" />
            </ButtonMenu>
        </div>
        <div className="slds-m-horizontal_xx-large">
            <ButtonMenu menuAlignment="left" menuSize="x-small">
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
            </ButtonMenu>
        </div>
    </div>


button menu width variants

    <div className="slds-m-horizontal_xx-large slds-m-vertical_large" >
        <div className="slds-grid slds-grid_align-spread">
            <ButtonMenu menuSize="xx-small">
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
            </ButtonMenu>
            <ButtonMenu menuSize="x-small" menuAlignment="right">
                <MenuItem label="x-small" />
                <MenuItem label="x-small" />
                <MenuItem label="x-small" />
            </ButtonMenu>
            <ButtonMenu menuSize="small" menuAlignment="right">
                <MenuItem label="small" />
                <MenuItem label="small" />
                <MenuItem label="small" />
            </ButtonMenu>
        </div>
        <div className="slds-p-top_xx-large">
            <ButtonMenu menuSize="medium">
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
                <MenuItem label="Menu medium" />
            </ButtonMenu>
        </div>
        <div className="slds-p-top_xx-large">
            <ButtonMenu menuSize="large">
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
            </ButtonMenu>
        </div>
    </div>
    

button menu loading

    <div className="slds-p-vertical_large slds-align_absolute-center" >
        <ButtonGroup>
            <ButtonIcon iconName="utility:add" variant="border-filled" />
            <ButtonIcon iconName="utility:edit" variant="border-filled" />
            <ButtonIcon iconName="utility:paste" variant="border-filled" />
            <ButtonMenu menuAlignment="right" menuSize="x-small" isLoading />
        </ButtonGroup>
    </div>