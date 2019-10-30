##### Chip simple

```js
import React from 'react';
import { Chip } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Chip className="rainbow-m-around_medium" label="Chip base" />

    <Chip className="rainbow-m-around_medium" label="Chip Neutral" variant="neutral" />

    <Chip className="rainbow-m-around_medium" label="Chip Neutral" variant="outline-brand" />

    <Chip className="rainbow-m-around_medium" label="Chip Brand" variant="brand" />
</div>;
```

##### Deletable Chip

```js
import React from 'react';
import { Chip } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Chip
        className="rainbow-m-around_medium"
        label="Chip base"
        onDelete={() => alert('Delete Chip!')}
    />

    <Chip
        className="rainbow-m-around_medium"
        label="Chip Neutral"
        variant="neutral"
        onDelete={() => alert('Delete Chip!')}
    />

    <Chip
        className="rainbow-m-around_medium"
        label="Chip Outline Brand"
        variant="outline-brand"
        onDelete={() => alert('Delete Chip!')}
    />

    <Chip
        className="rainbow-m-around_medium"
        label="Chip Brand"
        variant="brand"
        onDelete={() => alert('Delete Chip!')}
    />
</div>;
```

##### Chip with Icon and Avatar

```js
import React from 'react';
import { Chip, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const AvatarStyles = {
    width: '30px',
    height: '30px',
    marginTop: '-2px',
};

const ChipContainer = {
    paddingLeft: 0,
};

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Chip
        style={ChipContainer}
        className="rainbow-m-around_medium"
        label={
            <span>
                <Avatar
                    style={AvatarStyles}
                    className="rainbow-m-right_x-small"
                    src="images/user/user3.jpg"
                    assistiveText="Tahimi"
                    title="Tahimi"
                    size="medium"
                />
                Chip Base with Avatar
            </span>
        }
    />

    <Chip
        style={ChipContainer}
        className="rainbow-m-around_medium"
        variant="neutral"
        onDelete={() => alert('Delete Chip!')}
        label={
            <span>
                <Avatar
                    style={AvatarStyles}
                    className="rainbow-m-right_x-small"
                    src="images/user/user3.jpg"
                    assistiveText="Tahimi"
                    title="Tahimi"
                    size="medium"
                />
                Chip Neutral with Avatar
            </span>
        }
    />

    <Chip
        className="rainbow-m-around_medium"
        variant="outline-brand"
        label={
            <span>
                <FontAwesomeIcon
                    icon={faStar}
                    className="rainbow-color_brand rainbow-m-right_xx-small"
                />{' '}
                Chip Outline Brand with Icon
            </span>
        }
    />

    <Chip
        className="rainbow-m-around_medium"
        variant="brand"
        onDelete={() => alert('Delete Chip!')}
        label={
            <span>
                <FontAwesomeIcon
                    icon={faStar}
                    className="rainbow-color_white rainbow-m-right_xx-small"
                />{' '}
                Chip Brand{' '}
            </span>
        }
    />
</div>;
```
