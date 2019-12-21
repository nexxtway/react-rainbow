##### Chip simple

```js
import React from 'react';
import { Chip } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Chip className="rainbow-m-around_medium" label="Chip base" />

    <Chip className="rainbow-m-around_medium" label="Chip Neutral" variant="neutral" />

    <Chip className="rainbow-m-around_medium" label="Chip Neutral" variant="outline-brand" />

    <Chip className="rainbow-m-around_medium" label="Chip Brand" variant="brand" />
</div>
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
</div>
```

##### Chip with Icon and Avatar

```js
import React from 'react';
import { Chip, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const AvatarStyles = {
    width: '30px',
    height: '30px',
    marginTop: '-2px',
};

const ChipContainer = {
    paddingLeft: 0,
};

const Icon = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${props.getContrastText(props.brand.main)};
        `};
    ${props =>
        props.variant === 'outline-brand' &&
        `
            color: ${props.brand.main};
        `};
    
`;

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
            <Icon variant="outline-brand">
                <FontAwesomeIcon
                    icon={faStar}
                    className="rainbow-m-right_xx-small"
                />{' '}
                Chip Outline Brand with Icon
            </Icon>
        }
    />

    <Chip
        className="rainbow-m-around_medium"
        variant="brand"
        onDelete={() => alert('Delete Chip!')}
        label={
            <Icon variant="brand">
                <FontAwesomeIcon
                    icon={faStar}
                    className="rainbow-m-right_xx-small"
                />{' '}
                Chip Brand{' '}
            </Icon>
        }
    />
</div>
```
