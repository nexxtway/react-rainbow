##### card default with illustration

```js
import React from 'react';
import { Card } from 'react-rainbow-components';

<div className="rainbow-p-around_large">
    <Card>
        <img
            src="images/illustrations/Illustration-rainbow-1.svg"
            className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
            alt="landscape with rainbows, birds and colorful balloons"
        />
    </Card>
</div>
```

##### card-with header and button

```js
import React from 'react';
import { Card, Avatar, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

<div className="rainbow-m-around_large">
    <Card
        icon={<Avatar icon={<FontAwesomeIcon icon={faUser} />} />}
        title="Contact details"
        actions={<Button label="New" variant="outline-brand" />}
    />
</div>
```

##### card-with header and spinner

```js
import React from 'react';
import { Card, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUsers, faEdit, faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-around_large">
    <Card
        isLoading
        icon={<FontAwesomeIcon icon={faUsers} size="lg" className="rainbow-color_brand" />}
        title="Contacts"
        actions={
            <ButtonGroup>
                <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faPlus} />} />
                <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEdit} />} disabled />
                <ButtonIcon
                    variant="border"
                    icon={<FontAwesomeIcon icon={faAngleDown} />}
                    disabled
                />
            </ButtonGroup>
        }
    />
</div>
```

##### card with header and illustration

```js
import React from 'react';
import { Card, ButtonIcon, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

<div className="rainbow-m-around_large">
    <Card
        icon={
            <span
                className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
                style={iconContainerStyles}
            >
                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
            </span>
        }
        title="Task"
        actions={<Button variant="neutral" label="Add" />}
        footer={
            <div className="rainbow-align-content_space-between">
                <div className="rainbow-flex">
                    <ButtonIcon
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        className="rainbow-m-right_xx-small"
                    />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
                </div>
                <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
            </div>
        }
    >
        <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <img
                src="images/illustrations/Illustration-rainbow-2.svg"
                alt="landscape with rainbows and colorful birds"
            />
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
                No new tasks
            </h1>
        </div>
    </Card>
</div>
```
