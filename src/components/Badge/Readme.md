##### badges badges border

    <div className="slds-p-vertical_large slds-align--absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Badge label="Lightest Badge" variant="lightest" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge label="Outline Badge" variant="outline-brand" />
        </div>
    </div>

##### badges variant

    <div className="slds-p-vertical_large slds-align--absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Badge label="Default Badge" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge label="Darker Badge" variant="inverse" />
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge label="Brand Badge" variant="brand" />
        </div>
    </div>

##### badges with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-solid-svg-icons');

    <div className="slds-p-vertical_large slds-align--absolute-center slds-wrap">
        <div className="slds-m-horizontal_medium">
            <Badge variant="inverse">
                <FontAwesomeIcon icon={faStar} pull="left"/>
                112 005
            </Badge>
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge variant="lightest">
                <FontAwesomeIcon icon={faStar} pull="left"/>
                212 002
            </Badge>
        </div>
        <div className="slds-m-horizontal_medium">
            <Badge variant="lightest">
                <FontAwesomeIcon icon={faStar}/>
            </Badge>
        </div>
    </div>