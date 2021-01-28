# ButtonIcon variants
##### ButtonIcons change color according to the variant provided. This is an example with the variants we offer.

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSlidersH, faSignal, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="base" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="outline-brand" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="neutral" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="brand" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="success" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon variant="destructive" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
```

# ButtonIcon shaded
##### You can add a shadow under the ButtonIcon by aplying the shaded variant, just pass the `shaded` prop.

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="border-filled" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="neutral" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="brand" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="success" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon shaded variant="destructive" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
    </div>
```

# ButtonIcon inverse
##### The inverse variant is useful when using ButtonIcon on a dark background. 

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

    <InverseContainer className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon variant="inverse" icon={<FontAwesomeIcon icon={faStar} />} />
    </InverseContainer>
```

# ButtonIcon size
##### If you need to resize your ButtonIcon, you can do so using the `size` prop.

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faTrashAlt,
    faPencilAlt,
    faLocationArrow,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="large" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="medium" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="x-small" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" size="xx-small" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
    </div>
```

# ButtonIcon disabled
##### Pass the `disabled` prop to render the ButtonIcon as disabled. When disabled, all the functionalities will be deactivated.

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border" disabled icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="brand" disabled icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <ButtonIcon disabled icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
```

# ButtonIcon with tooltip
##### If you want to show a tooltip with additional information about your ButtonIcon just set the `tooltip` prop to your desired content.

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
    faTrashAlt,
    faPencilAlt,
    faLocationArrow,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" size="medium" tooltip="Star" icon={<FontAwesomeIcon icon={faStar} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" size="medium" tooltip="Navigate" icon={<FontAwesomeIcon icon={faLocationArrow} />}/>
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" size="medium" tooltip="Edit" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        </div>
        <div className="rainbow-p-right_large">
            <ButtonIcon variant="border-filled" size="medium" tooltip="Delete" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
        </div>
        <ButtonIcon variant="border-filled" size="medium" tooltip="Arrow down" icon={<FontAwesomeIcon icon={faArrowDown} />} />
    </div>
```
