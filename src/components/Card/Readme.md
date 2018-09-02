##### card default with illustration

    <div className="slds-p-around_large">
        <Card>
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
            icon={<Avatar icon={<FontAwesomeIcon icon={faUser} size="lg" />} />}
            title="Contact details"
            actions={<Button variant="neutral" label="New" variant="outline-brand" />} />
    </div>


##### card-with header and spinner

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faUsers } = require('@fortawesome/free-solid-svg-icons');

    const iconStyles = { color: '#01b6f5' };

    <div className="slds-m-around_large">
        <Card
            isLoading
            icon={<FontAwesomeIcon icon={faUsers} size="lg" style={iconStyles} />}
            title="Contacts"
            actions={
                <ButtonGroup>
                    <ButtonIcon iconName="utility:add" variant="border-filled" />
                    <ButtonIcon iconName="utility:edit" variant="border-filled" disabled />
                    <ButtonIcon iconName="utility:chevrondown" variant="border-filled" disabled />
                </ButtonGroup>
            } />
    </div>


##### card with header and illustration

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faTasks, faShareAlt, faAngleDown } = require('@fortawesome/free-solid-svg-icons');
    const { faHeart } = require('@fortawesome/free-regular-svg-icons');

    const iconContainerStyles = {
        borderRadius: '15rem',
        backgroundColor: '#1de9b6',
        width: '2rem',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const tasksIconStyles = { color: '#fff' };
    const footerContainerStyles = { display: 'flex', justifyContent: 'space-between' };
    const heartIconStyles = { marginRight: '1rem' };

    <div className="slds-m-around_large">
        <Card
            className="slds-card_boundary"
            icon={
                <span style={iconContainerStyles} >
                    <FontAwesomeIcon icon={faTasks} size="lg" style={tasksIconStyles} />
                </span>
            }
            title="Task"
            actions={<Button variant="neutral" label="Add" />}
            footer={
                <div style={footerContainerStyles}>
                    <div >
                        <FontAwesomeIcon icon={faHeart} size="lg" style={heartIconStyles} />
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
