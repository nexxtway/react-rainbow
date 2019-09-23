##### CarouselCard

```js
const carouselContainerStyles = {
    maxWidth: 600,
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
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <CarouselCard
        style={carouselContainerStyles}
        className="rainbow-align-content_center rainbow-m_auto"
        id="carousel-1"
    >
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-4.svg"
            header="First Card"
            description="First card description."
            alternativeText="First card accessible description."
            href="/"
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-3.svg"
            header="Second Card"
            description="Second card description."
            alternativeText="Second card accessible description."
            href="/"
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-5.svg"
            header="Third Card"
            description="Third card description."
            alternativeText="Third card accessible description."
            href="/"
        />
    </CarouselCard>
</div>;
```
