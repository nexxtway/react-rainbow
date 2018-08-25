##### page using breadcrumb - Selected /Focused

    <article className="slds-p-bottom_xx-large slds-m-bottom_xx-large">
        <GlobalHeader src="images/avatar2.jpg">
            <ButtonGroup>
                <ButtonIcon iconName="utility:edit" variant="border-filled" />
                <ButtonIcon iconName="utility:paste" variant="border-filled" />
                <ButtonIcon iconName="utility:settings" variant="border-filled" />
            </ButtonGroup>
        </GlobalHeader>
        <div className="slds-m-horizontal_large slds-p-top_large slds-m-bottom_xx-large">
            <Breadcrumbs>
                <Breadcrumb label="Parent entity" onClick={ () => alert('Breadcrumb was clicked') } />
                <Breadcrumb label="Parent record name" />
            </Breadcrumbs>
        </div>
    </article>
