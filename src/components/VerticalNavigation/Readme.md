Simple List
    <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium slds-m-vertical_xx-large">
            <VerticalNavigation>
                <VerticalSection label="section 1">
                    <VerticalItem name="item 1" label="item 1" />
                    <VerticalItem name="item 2" label="item 2" iconName="utility:opened_folder" />
                    <VerticalItem name="item 3" label="item 3" notification={<Badge label="3" variant="lightest" />} />
                </VerticalSection>
            </VerticalNavigation>
        </div>
    </div>

List with overflow section
    <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium slds-m-vertical_xx-large">
            <VerticalNavigation>
                <VerticalSection label="section 1">
                    <VerticalItem name="item 1" label="item 1" />
                    <VerticalItem name="item 2" label="item 2" />
                    <VerticalItem name="item 3" label="item 3" />
                </VerticalSection>
                <VerticalSectionOverflow>
                    <VerticalItem name="item 4" label="item 4" />
                    <VerticalItem name="item 5" label="item 5" />
                    <VerticalItem name="item 6" label="item 6" />
                </VerticalSectionOverflow>
            </VerticalNavigation>
        </div>
    </div>