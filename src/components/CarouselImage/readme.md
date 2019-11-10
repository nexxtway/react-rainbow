##### CarouselImage

```js
import React from 'react';
import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const carouselContainerStyles = {
    maxWidth: 600,
};

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <CarouselCard className="rainbow-m_auto" style={carouselContainerStyles}>
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-4.svg"
            header="First Card"
            description="First card description."
            alternativeText="First card accessible description."
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-3.svg"
            header="Second Card"
            description="Second card description."
            alternativeText="Second card accessible description."
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-5.svg"
            header="Third Card"
            description="Third card description."
            alternativeText="Third card accessible description."
        />
    </CarouselCard>
</div>
```

##### CarouselImage with navigation

```js
import React from 'react';
import { CarouselCard, CarouselImage } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const carouselContainerStyles = {
    maxWidth: 600,
};

<div className="rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg" />
    <CarouselCard className="rainbow-m_auto" style={carouselContainerStyles}>
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-4.svg"
            header="First Card"
            description="First card description."
            alternativeText="First card accessible description."
            href="/#/Components/CarouselCard"
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-3.svg"
            header="Second Card"
            description="Second card description."
            alternativeText="Second card accessible description."
            href="/#/Components/CarouselCard"
        />
        <CarouselImage
            src="images/illustrations/Illustration-rainbow-5.svg"
            header="Third Card"
            description="Third card description."
            alternativeText="Third card accessible description."
            href="/#/Components/CarouselCard"
        />
    </CarouselCard>
</div>
```
