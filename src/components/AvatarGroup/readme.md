##### photo-url

```js
import React from 'react';
import { AvatarGroup } from 'react-rainbow-components';

const avatars = [
    {
        src:"images/user/user1.jpg",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        src:"images/user/user3.jpg",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        src:"images/user/user4.jpg",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user initials

```js
import React from 'react';
import { AvatarGroup } from 'react-rainbow-components';

const avatars = [
    {
        initials:"JL",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        initials:"TL",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        initials:"CM",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        initials:"JD",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user icon

```js
import React from 'react';
import { AvatarGroup } from 'react-rainbow-components';

const icon = <img src="icons/user.svg" alt="icon" />;

const avatars = [
    {
        icon:icon,
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        icon:icon,
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        icon:icon,
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        icon:icon,
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        showCounter={true}
    />
</div>
```

##### fallback user initials inverse

```js
import React from 'react';
import { AvatarGroup } from 'react-rainbow-components';

const avatarContainerStyles = {
    borderRadius: '0 0 0.875rem 0.875rem',
};

const avatars = [
    {
        initials:"JL",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        initials:"TL",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        initials:"CM",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        initials:"JD",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex_column rainbow-align_center rainbow-background-color_dark-1">
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={4}
        style={avatarContainerStyles}
    />
    <AvatarGroup
        className="rainbow-m-horizontal_medium"
        avatars={avatars}
        maxAvatars={3}
        style={avatarContainerStyles}
        showCounter={true}
    />
</div>
```

##### photo-url sizes

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const CustomText = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: #a4a7b5;
    font-size: 14px;
    ${props =>
        props.custom &&
        `
            font-size: 18px;
            font-weight: 900;

        `};
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${props.brand.main};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            color: ${props.success.main};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${props.warning.main};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.error.main};
        `};
`;

const avatars = [
    {
        src:"images/user/user1.jpg",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        src:"images/user/user3.jpg",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        src:"images/user/user4.jpg",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-m-around_large">
    <Card
        className="rainbow-p-around_small"
    >
        <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
            <CustomText>
                x-small
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={4}
                size="x-small"
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
            <CustomText>
                small
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={4}
                size="small"
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
            <CustomText>
                medium
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={4}
                size="medium"
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
            <CustomText>
                large
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={4}
                size="large"
            />
        </div>
    </Card>
</div>
```

##### AvatarGroup

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const CustomText = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: #a4a7b5;
    font-size: 14px;
    ${props =>
        props.custom &&
        `
            font-size: 18px;
            font-weight: 900;

        `};
    ${props =>
        props.variant === 'brand' &&
        `
            color: ${props.brand.main};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            color: ${props.success.main};
        `};
    ${props =>
        props.variant === 'warning' &&
        `
            color: ${props.warning.main};
        `};
    ${props =>
        props.variant === 'error' &&
        `
            color: ${props.error.main};
        `};
`;

const avatars = [
    {
        src:"images/user/user1.jpg",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        src:"images/user/user3.jpg",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        src:"images/user/user4.jpg",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
];

<div className="rainbow-m-around_large">
    <Card
        className="rainbow-p-around_small rainbow-align-content_space-between rainbow-m-bottom_small"
    >
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Organization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                Nexxtway
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={3}
                showCounter={true}
                size='small'
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Localization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                Miami, FL
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Earnings
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                $120M
            </CustomText>
        </div>
    </Card>
    <Card
        className="rainbow-p-around_small rainbow-align-content_space-between rainbow-m-bottom_small"
    >
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Organization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                Rainbow
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={4}
                size='small'
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Localization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                Miami, FL
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Earnings
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                $66M
            </CustomText>
        </div>
    </Card>
    <Card
        className="rainbow-p-around_small rainbow-align-content_space-between"
    >
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Organization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                OpenSource
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatars}
                maxAvatars={2}
                size='small'
            />
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Localization
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                world-wide
            </CustomText>
        </div>
        <div className="rainbow-flex_column rainbow-align-content_space-between">
            <CustomText>
                Earnings
            </CustomText>
            <CustomText
                custom
                variant="brand"
            >
                $8K
            </CustomText>
        </div>
    </Card>
</div>
```
