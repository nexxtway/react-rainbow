##### CarouselImage

    const carouselContainerStyles = {
        width: 340,
    };

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faPencilAlt,
        faStore,
        faPlus,
        faBell,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <div className="rainbow-align-content_center">
            <CarouselCard style={carouselContainerStyles}>
                <CarouselImage
                    src = "images/illustrations/Illustration-rainbow-4.svg"
                    header = "First Card"
                    description = "First card description."
                    alternativeText = "First card accessible description."
                    href="/" />
                </CarouselCard>
            </div>
        </div>
