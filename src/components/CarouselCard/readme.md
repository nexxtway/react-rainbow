##### CarouselCard

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

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
            <ButtonGroup className="rainbow-m-right_medium">
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
            </ButtonGroup>
        </GlobalHeader>
        <div className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-m-horizontal_xx-large">
            <CarouselCard id="carousel-1">
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-4.svg"
                    header="First Card"
                    description="First card description."
                    alternativeText="First card accessible description."
                    href="/" />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-5.svg"
                    header="Second Card"
                    description="Second card description."
                    alternativeText="Second card accessible description."
                    href="/" />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-1.svg"
                    header="Third Card"
                    description="Third card description."
                    alternativeText="Third card accessible description."
                    href="/" />
                </CarouselCard>
            </div>
    </div>
