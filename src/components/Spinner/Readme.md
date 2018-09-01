##### list loading using spinner - base - medium

    <div>
       <GlobalHeader src="images/avatar2.jpg" />
            <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap">
                <div className="slds-m-horizontal_medium slds-m-vertical_xx-large">
                    <Spinner size="medium" />
                </div>
            </div>
    </div>


##### full screen loading using spinner - brand - large

    const spinnerTextStyles = {
        color: '#0070d2',
    };

    <div className="slds-p-vertical_xx-large slds-align_absolute-center slds-wrap slds-grid_vertical">
        <div className="slds-is-relative slds-m-top_xx-large slds-p-top_xx-large">
            <Spinner variant="brand" size="large" />
        </div>
        <h1 className="slds-text-heading_small slds-m-vertical_x-large" style={spinnerTextStyles}>Loading…</h1>
    </div>

##### lazy loading using spinner - base - small

    const spinner = (
        <div className="slds-align_absolute-center">
            <div className="slds-is-relative">
                <Spinner size="small" />
            </div>
            <h1 className="slds-text-heading_small slds-m-left_large slds-text-color_default">Loading…</h1>
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
