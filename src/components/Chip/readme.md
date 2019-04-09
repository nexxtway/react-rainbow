##### Chip simple

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip base" />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="neutral" />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="outline-brand" />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Brand"
            variant="brand" />
    </div>


##### Chip with icon

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip base"
            icon={
                <FontAwesomeIcon icon={faStar} className="rainbow-color_gray-4" />
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="neutral"
            icon={
                <FontAwesomeIcon icon={faStar} className="rainbow-color_gray-4" />
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="outline-brand"
            icon={
                <FontAwesomeIcon icon={faStar} className="rainbow-color_brand" />
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Brand"
            variant="brand"
            icon={
                <FontAwesomeIcon icon={faStar} className="rainbow-color_white" />
            }
        />
    </div>


##### Deletable Chip

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip base"
            onDelete />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="neutral"
            onDelete />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Neutral"
            variant="outline-brand"
            onDelete />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Brand"
            variant="brand"
            onDelete />
    </div>
