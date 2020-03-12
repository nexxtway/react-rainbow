##### button icon base

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSlidersH, faSignal, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
    <div className="rainbow-p-right_large">
        <ButtonIcon size="large" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon size="medium" icon={<FontAwesomeIcon icon={faSlidersH} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon size="small" icon={<FontAwesomeIcon icon={faSignal} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon size="x-small" icon={<FontAwesomeIcon icon={faRedo} />} />
    </div>
    <ButtonIcon size="xx-small" icon={<FontAwesomeIcon icon={faTimes} />} />
</div>
```

##### button icon border

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
        <ButtonIcon
            variant="border"
            size="medium"
            icon={<FontAwesomeIcon icon={faLocationArrow} />}
        />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="border" size="x-small" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
    </div>
    <ButtonIcon variant="border" size="xx-small" icon={<FontAwesomeIcon icon={faArrowDown} />} />
</div>
```

##### button icon outline-brand

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
        <ButtonIcon variant="outline-brand" size="large" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="outline-brand" size="medium" icon={<FontAwesomeIcon icon={faLocationArrow} />}
        />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="outline-brand" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="outline-brand" size="x-small" icon={<FontAwesomeIcon icon={faTrashAlt} />} />
    </div>
    <ButtonIcon variant="outline-brand" size="xx-small" icon={<FontAwesomeIcon icon={faArrowDown} />} />
</div>
```

##### button icon filled

```js
import React from 'react';
import { ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

<div className="rainbow-p-vertical_large rainbow-p-left_x-large rainbow-flex rainbow-align_center">
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="brand" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="success" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <div className="rainbow-p-right_large">
        <ButtonIcon variant="destructive" icon={<FontAwesomeIcon icon={faStar} />} />
    </div>
    <ButtonIcon variant="neutral" icon={<FontAwesomeIcon icon={faStar} />} />
</div>
```

##### button icon shaded

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

##### button icon disabled

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

##### button icon inverse

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
