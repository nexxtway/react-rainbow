##### badges border

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge label={"0"} />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label={0} />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge>{"0"}</Badge>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge>{0}</Badge>
        </div>
    </div>

##### badges variant

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Default Badge" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Darker Badge" variant="inverse" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Brand Badge" variant="brand" />
        </div>
    </div>

##### badges with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="inverse">
                <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
                112 005
            </Badge>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="lightest">
                <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
                212 002
            </Badge>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="lightest">
                <FontAwesomeIcon icon={faStar} size="lg" />
            </Badge>
        </div>
    </div>