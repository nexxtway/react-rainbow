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
        icon,
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        icon,
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        icon,
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        icon,
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

##### photo-url sizes

```js
import React from 'react';
import { AvatarGroup } from 'react-rainbow-components';
import styled from 'styled-components';

const CustomText = styled.h1.attrs(props => {
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

<div className="rainbow-flex rainbow-justify_center rainbow-m-around_large">
    <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
        <AvatarGroup
            className="rainbow-m-horizontal_medium"
            avatars={avatars}
            maxAvatars={4}
            size="x-small"
        />
        <CustomText>
            x-small
        </CustomText>
    </div>
    <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
        <AvatarGroup
            className="rainbow-m-horizontal_medium"
            avatars={avatars}
            maxAvatars={4}
            size="small"
        />
        <CustomText>
            small
        </CustomText>
    </div>
    <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
        <AvatarGroup
            className="rainbow-m-horizontal_medium"
            avatars={avatars}
            maxAvatars={4}
            size="medium"
        />
        <CustomText>
            medium
        </CustomText>
    </div>
    <div className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small">
        <AvatarGroup
            className="rainbow-m-horizontal_medium"
            avatars={avatars}
            maxAvatars={4}
            size="large"
        />
        <CustomText>
            large
        </CustomText>
    </div>
</div>
```

##### AvatarGroup

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const columnStyles = {
    width: '25%',
    alignItems: 'space-around',
};

const CustomText = styled.h1.attrs(props => {
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
        className="rainbow-p-vertical_small rainbow-p-horizontal_large rainbow-flex rainbow-justify_space-around rainbow-m-bottom_small"
    >
        <div style={columnStyles}>
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
        <div style={columnStyles}>
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                avatars={avatars}
                maxAvatars={3}
                showCounter={true}
                size='small'
            />
        </div>
        <div style={columnStyles}>
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
        <div style={columnStyles}>
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
        className="rainbow-p-vertical_small rainbow-p-horizontal_large rainbow-flex rainbow-justify_space-around rainbow-m-bottom_small"
    >
        <div style={columnStyles}>
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
        <div style={columnStyles}>
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                avatars={avatars}
                maxAvatars={4}
                size='small'
            />
        </div>
        <div style={columnStyles}>
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
        <div style={columnStyles}>
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
        className="rainbow-p-vertical_small rainbow-p-horizontal_large rainbow-flex rainbow-justify_space-around"
    >
        <div style={columnStyles}>
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
        <div style={columnStyles}>
            <CustomText>
                Members
            </CustomText>
            <AvatarGroup
                avatars={avatars}
                maxAvatars={2}
                size='small'
            />
        </div>
        <div style={columnStyles}>
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
        <div style={columnStyles}>
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
