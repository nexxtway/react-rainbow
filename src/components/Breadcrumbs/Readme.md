page using Breadcrumb - Selected /Focused

    <article className="slds-p-bottom_xx-large slds-m-bottom_xx-large">
        <div className="slds-m-horizontal_large slds-p-top_large slds-m-bottom_xx-large">
            <Breadcrumbs>
                <Breadcrumb label="Parent entity" onClick={ () => alert('Breadcrumb was clicked') } />
                <Breadcrumb label="Parent record name" />
            </Breadcrumbs>
        </div>
    </article>
