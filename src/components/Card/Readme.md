##### card default with illustration

    <div className="slds-p-around_large">
        <Card className="slds-card_boundary">
           <img 
            src="images/illustrations/empty-state-assistant.svg"
            className="slds-p-vertical_x-large slds-align_absolute-center"
            alt="the wood" />
        </Card>
    </div>


##### card with header and button

    <div className="slds-m-around_large">    
        <Card
            className="slds-card_boundary"
            title="Conatct details"
            actions={<Button variant="neutral" label="New" />} >
        </Card>
    </div>


##### card with related list

    <div className="slds-m-around_large">  
        <Card
            className="slds-card_boundary"
            title="Contacts (3)"
            footer="View all"
            actions={<Button variant="neutral" label="New" />} >

                <h1 className="slds-p-bottom_medium slds-text-heading_x-small" >Anything in the body</h1>
        </Card>
    </div>


##### card loading

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            isLoading
            title="Task"
            actions={<Button variant="neutral" label="New" />} >
        </Card>
    </div>


##### card with header and illustration

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            title="Task"
            actions={<Button variant="neutral" label="New" />} >

                <div className="slds-p-vertical_large slds-align_absolute-center slds-grid_vertical" >
                    <img src="images/illustrations/empty-state-tasks.svg" alt="the wood" />
                    <h1 className="slds-p-top_large slds-text-heading_medium" >No new tasks</h1>
                </div>
        </Card>
    </div>
