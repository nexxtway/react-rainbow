progressBar base

    <div className="slds-p-around_x-large" >
        <ProgressBar value={25} /> 
    </div>
   

progressBar success

    <div className="slds-p-around_x-large" >
        <ProgressBar value={50} color="success" /> 
    </div>


descriptive progressBar

    <div className="slds-p-around_x-large" >
        <ProgressBar value={25} /> 
    </div>


circular progressBar

    <div className="slds-p-around_x-large" >
        <ProgressBar value={75} variant="circular" />
    </div>


progressBar with size variants

    <div className="slds-p-around_large">
        <div className="slds-p-around_medium">
            <ProgressBar value={25} size="x-small" />
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={50} size="small" />
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={35} size="medium" />
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={75} size="large" />
        </div>
    </div>