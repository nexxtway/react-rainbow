##### progressBar base

    <div className="slds-p-around_x-large" >
        <ProgressBar value={25} /> 
    </div>
   

##### progressBar success

    <div className="slds-p-around_x-large" >
        <ProgressBar value={50} color="success" /> 
    </div>


##### descriptive progressBar

    <div className="slds-p-around_x-large" >
        <div className="slds-grid slds-grid_align-spread slds-p-bottom_x-small">
            <span>Einstein Setup Assistant</span>
            <span aria-hidden="true">
              <strong>25% Complete</strong>
            </span>
        </div>
        <ProgressBar value={25} /> 
    </div>


##### circular progressBar

    <div className="slds-p-around_x-large" >
        <ProgressBar value={75} variant="circular" />
    </div>


##### progressBar with size variants

    <div className="slds-p-around_large">
        <div className="slds-p-around_medium">
            <ProgressBar value={25} size="x-small" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: x-small</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={50} size="small" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: small</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={35} size="medium" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: medium</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={75} size="large" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: large</span>
        </div>
    </div>
