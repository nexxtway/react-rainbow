vertical navigation

    <div className="slds-size_1-of-3 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem name="item 2" label="Created by Me" />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSection label="Folders">
                <VerticalItem name="item 5" label="Created by Me" />
                <VerticalItem name="item 6" label="Shared with Me" />
            </VerticalSection>
        </VerticalNavigation>
    </div>


vertical navigation compact

    <div className="slds-size_1-of-3 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation compact>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem name="item 2" label="Created by Me" />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSection label="Folders">
                <VerticalItem name="item 5" label="Created by Me" />
                <VerticalItem name="item 6" label="Shared with Me" />
            </VerticalSection>
        </VerticalNavigation>
    </div>


vertical navigation with icons
    
    <div className="slds-size_1-of-3 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem name="item 2" label="Created by Me" />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSection label="Folders">
                <VerticalItem
                    name="item 5"
                    label="Created by Me"
                    iconName="utility:opened_folder" />
                <VerticalItem
                    name="item 6"
                    label="Shared with Me"
                    iconName="utility:opened_folder" />
                <VerticalItem
                    name="item 7"
                    label="Apps"
                    iconName="utility:apps" />
            </VerticalSection>
        </VerticalNavigation>
    </div>


vertical navigation with notifications
    
    <div
        className="slds-size_1-of-3 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem
                    name="item 2"
                    label="Created by Me"
                    notification={<Badge label="NEW" variant="default" />}
                />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSection label="Folders">
                <VerticalItem
                    name="item 5"
                    label="Created by Me"
                    notification={<Badge label="5" variant="inverse" />}
                />
                <VerticalItem name="item 6" label="Shared with Me" />
                <VerticalItem name="item 7" label="Apps" />
            </VerticalSection>
            
        </VerticalNavigation>
    </div>


vertical navigation with shaded background
    
    <div className="slds-size_1-of-3 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation shaded>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem name="item 2" label="Created by Me" />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSection label="Folders">
                <VerticalItem name="item 5" label="Created by Me" />
                <VerticalItem name="item 6" label="Shared with Me" />
            </VerticalSection>
        </VerticalNavigation>
    </div>


vertical navigation expandable
    
    <div className="slds-size_1-of-3 slds-color__background_gray-1 slds-p-vertical_medium slds-border_right">
        <VerticalNavigation>
            <VerticalSection label="REPORTS">
                <VerticalItem name="item 1" label="Recent" />
                <VerticalItem name="item 2" label="Created by Me" />
                <VerticalItem name="item 3" label="Private Reports" />
                <VerticalItem name="item 4" label="Public Reports" />
            </VerticalSection>
            <VerticalSectionOverflow expandedLabel= "FOLDERS" collapsedLabel= "FOLDERS">
                <VerticalItem name="item 5" label="Created by Me" />
                <VerticalItem name="item 6" label="Shared with Me" />
                <VerticalItem name="item 6" label="Apps" />
            </VerticalSectionOverflow>
            <VerticalSectionOverflow expandedLabel= "DOCUMENTS" collapsedLabel= "DOCUMENTS">
                <VerticalItem name="item 7" label="Created by Me" />
                <VerticalItem name="item 8" label="Shared with Me" />
            </VerticalSectionOverflow>
        </VerticalNavigation>
    </div>
