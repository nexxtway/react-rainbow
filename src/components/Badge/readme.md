##### badges border

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Lightest Badge" variant="lightest" title="the badge title" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Outline Badge" variant="outline-brand" title="the badge title" />
        </div>
    </div>

##### badges variant

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Default Badge" title="the badge title" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Darker Badge" variant="inverse" title="the badge title" />
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge label="Brand Badge" variant="brand" title="the badge title" />
        </div>
    </div>

##### badges with icons

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="inverse" title="the badge title">
                <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
                112 005
            </Badge>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="lightest" title="the badge title">
                <FontAwesomeIcon icon={faStar} pull="left" size="lg" />
                212 002
            </Badge>
        </div>
        <div className="rainbow-m-horizontal_medium">
            <Badge variant="lightest" title="the badge title">
                <FontAwesomeIcon icon={faStar} size="lg" />
            </Badge>
        </div>
    </div>
