##### card default with illustration

    <div className="slds-p-around_large">
        <Card className="slds-card_boundary">
           <img 
            src="images/illustrations/Illustration-rainbow-1.svg"
            className="slds-p-vertical_x-large slds-align_absolute-center"
            alt="the wood" />
        </Card>
    </div>


##### card-with header and button

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUser } = require('@fortawesome/free-regular-svg-icons');

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            icon={<Avatar icon={<FontAwesomeIcon icon={faUser} size="lg" />} />}
            title="Contact details"
            actions={<Button variant="neutral" label="New" variant="outline-brand" />} >
        </Card>
    </div>


##### card-with header and spinner

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUsers } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            isLoading
            icon={<FontAwesomeIcon icon={faUsers} size="lg" style={{ color: '#01b6f5' }} />}
            title="Contacts"
            actions={
                <ButtonGroup>
                    <ButtonIcon iconName="utility:add" variant="border-filled" />
                    <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
                    <ButtonIcon iconName="utility:chevrondown" variant="border-filled" disabled />
                </ButtonGroup>
            } >
        </Card>
    </div>


##### card with header and illustration

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faTasks, faShareAlt, faAngleDown } = require('@fortawesome/free-solid-svg-icons');
    const { faHeart } = require('@fortawesome/free-regular-svg-icons');

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            icon={
                <span style={{
                    borderRadius: '15rem',
                    backgroundColor: '#1de9b6',
                    width: '2rem',
                    height: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'}} >
                    <FontAwesomeIcon icon={faTasks} size="lg" style={{color: '#fff'}} />
                </span>
            }
            title="Task"
            actions={<Button variant="neutral" label="Add" />}
            footer={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div >
                        <FontAwesomeIcon icon={faHeart} size="lg" style={{ marginRight: '1rem' }} />
                        <FontAwesomeIcon icon={faShareAlt} size="lg" />
                    </div>
                    <FontAwesomeIcon icon={faAngleDown} size="lg" />
                </div>
            } >

                <div className="slds-p-vertical_large slds-align_absolute-center slds-grid_vertical" >
                    <img src="images/illustrations/Illustration-rainbow-2.svg" alt="the wood" />
                    <h1 className="slds-p-top_large slds-text-heading_medium" >No new tasks</h1>
                </div>
        </Card>
    </div>
