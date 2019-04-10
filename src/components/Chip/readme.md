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
            label="Chip Outline Brand"
            variant="outline-brand"
            onDelete />

        <Chip
            className="rainbow-m-horizontal_medium"
            label="Chip Brand"
            variant="brand"
            onDelete />

    </div>


##### Chip with icon

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const { faStar } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        <Chip
            className="rainbow-m-horizontal_medium"
            label={
                <span><FontAwesomeIcon icon={faStar} className="rainbow-color_gray-4 rainbow-m-right_xx-small" /> Chip base </span>
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            variant="neutral"
            onDelete
            label={
                <span><FontAwesomeIcon icon={faStar} className="rainbow-color_gray-4 rainbow-m-right_xx-small" /> Chip Neutral </span>
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            variant="outline-brand"
            label={
                <span><FontAwesomeIcon icon={faStar} className="rainbow-color_brand rainbow-m-right_xx-small" /> Chip Outline Brand </span>
            }
        />

        <Chip
            className="rainbow-m-horizontal_medium"
            variant="brand"
            onDelete
            label={
                <span><FontAwesomeIcon icon={faStar} className="rainbow-color_white rainbow-m-right_xx-small" /> Chip Brand </span>
            }
        />

    </div>
