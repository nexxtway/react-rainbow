List loading using Spinner - Base - Medium:

    <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Spinner size="medium" />
        </div>
    </div>

Full screen loading using Spinner - Brand - Large:

    const spinnerTextStyles = {
            color: '#0070d2',
    };

    <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap slds-grid_vertical">
        <div className="slds-is-relative slds-p-top_xx-large">
            <Spinner variant="brand" size="large" />
        </div>
        <h1 className="slds-text-heading_small slds-m-top_x-large" style={spinnerTextStyles}>Loading…</h1>
    </div>

Lazy loading using Spinner - Base - Small

        const spinner = (
            <div className="slds-align_absolute-center">
                <div className="slds-is-relative">
                    <Spinner size="small" />
                </div>
                <h1 className="slds-text-heading_small slds-m-left_large" style={{color: '#2a426c'}}>Loading…</h1>
            </div>
        );

        <div className="slds-p-vertical_large slds-p-horizontal_large">
            <Card
                className="slds-card_boundary"
                iconName="standard:account"
                title="Accounts (6)"
                footer={spinner}
                actions={<Button variant="neutral" label="New" />} >
                    <div className="slds-p-vertical_xx-large" />
            </Card>
        </div>
        
