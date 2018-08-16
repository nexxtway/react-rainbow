List loading using Spinner - Base - Medium:

     const containerStyles = {
        position: 'relative',
        padding: 20,
    };

    <div className="slds-card-wrapper">
        <div style={containerStyles}>
            <Spinner size="medium" />
        </div>
    </div>

Full screen loading using Spinner - Brand - Large:

     const cardContainerStyles = {
            height: 268,
    };

    const spinnerTextStyles = {
            color: '#0070d2',
    };

    <Card className="slds-align_absolute-center slds-grid--vertical" style={cardContainerStyles} >
        <div className="slds-is-relative">
            <Spinner variant="brand" size="large" />
        </div>
        <h1 className="slds-text-heading_small slds-m-top_xx-large" style={spinnerTextStyles}>Loading…</h1>
    </Card>

Lazy loading using Spinner - Base - Small

        const spinner = (
            <div className="slds-align_absolute-center">
                <div className="slds-is-relative">
                    <Spinner size="small" />
                </div>
                <h1 className="slds-text-heading_small slds-m-left_large" style={{color: '#2a426c'}}>Loading…</h1>
            </div>
        );

        const childrenStyles = {
            height: 150,
    };

        <div className="slds-card-wrapper">
            <Card
                className="slds-card_boundary"
                iconName="standard:account"
                title="Accounts (6)"
                footer={spinner}
                actions={<Button variant="neutral" label="New" />} >
                    <div style={childrenStyles} />
            </Card>
        </div>
        
