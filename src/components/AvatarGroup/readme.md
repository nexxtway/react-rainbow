##### AvatarGroup variants

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const Label = styled.h1`
    color: #a4a7b5;
    font-size: 14px;
    margin-bottom: 4px;
`;

const icon = <UserAvatarIcon />;

const avatarsUrl = [
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

const avatarsInitials = [
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

const avatarsIcon = [
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

<div className="rainbow-m-around_large">
    <Card className="rainbow-flex rainbow-justify_spread rainbow-p-horizontal_large rainbow-flex_wrap">
        <div className="rainbow-flex_column rainbow-m-horizontal_small rainbow-m-vertical_large">
            <Label>
                photo-url with counter
            </Label>
            <AvatarGroup
                avatars={avatarsUrl}
                maxAvatars={3}
                showCounter
            />
        </div>
        <div className="rainbow-flex_column rainbow-m-around_large">
            <Label>
                photo-url
            </Label>
            <AvatarGroup
                avatars={avatarsUrl}
                maxAvatars={4}
            />
        </div>
        <div className="rainbow-flex_column rainbow-m-around_large">
            <Label>
                fallback user icon
            </Label>
            <AvatarGroup
                avatars={avatarsIcon}
                maxAvatars={4}
            />
        </div>
        <div className="rainbow-flex_column rainbow-m-around_large">
            <Label>
                fallback user initials
            </Label>
            <AvatarGroup
                avatars={avatarsInitials}
                maxAvatars={4}
            />
        </div>
    </Card>
</div>

```


##### AvatarGroup sizes

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const Label = styled.h1`
    color: #a4a7b5;
    font-size: 14px;
    text-align: center;
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

<div className="rainbow-flex rainbow-justify_center rainbow-align_end rainbow-m-around_large rainbow-flex_wrap">
    <div className="rainbow-flex_column rainbow-m-around_large">
        <AvatarGroup
            avatars={avatars}
            maxAvatars={4}
            size="x-small"
        />
        <Label>
            x-small
        </Label>
    </div>
    <div className="rainbow-flex_column rainbow-m-around_large">
        <AvatarGroup
            avatars={avatars}
            maxAvatars={4}
            size="small"
        />
        <Label>
            small
        </Label>
    </div>
    <div className="rainbow-flex_column rainbow-m-around_large">
        <AvatarGroup
            avatars={avatars}
            maxAvatars={4}
            size="medium"
        />
        <Label>
            medium
        </Label>
    </div>
    <div className="rainbow-flex_column rainbow-m-around_large">
        <AvatarGroup
            avatars={avatars}
            maxAvatars={4}
            size="large"
        />
        <Label>
            large
        </Label>
    </div>
</div>
```

##### AvatarGroup

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const avatars = [
    {
        src:"images/user/user3.jpg",
        assistiveText:"Jose Leandro",
        title:"Jose Leandro",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Tahimi Leon",
        title:"Tahimi Leon",
    },
    {
        src:"images/user/user1.jpg",
        assistiveText:"Carlos Miguel",
        title:"Carlos Miguel",
    },
    {
        src:"images/user/user4.jpg",
        assistiveText:"Jane Doe",
        title:"Jane Doe",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Saray",
        title:"Saray",
    },
    {
        src:"images/user/user4.jpg",
        assistiveText:"John Doe",
        title:"John Doe",
    },
    {
        src:"images/user/user1.jpg",
        assistiveText:"Rey",
        title:"Rey",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Rafael",
        title:"Rafael",
    },
    {
        src:"images/user/user2.jpg",
        assistiveText:"Yury",
        title:"Yury",
    },
];

const Label = styled.h2`
    color: #a4a7b5;
    font-size: 14px;
`;

const Description = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 18px;
    font-weight: 900;
    color: ${props => props.brand.main};
`;

const ColumnContainer = styled.div`
    width: 25%;
    padding: 0 8px;

        @media (max-width: 600px) {
            width: 100%;
            margin: 8px 0;
        }
`;

const Column = props => {
    const { label, description } = props;
    return (
        <ColumnContainer>
             <Label>
                {label}
            </Label>
            <Description>
                {description}
            </Description>
        </ColumnContainer>
    );
}

const ExampleCard = props => {
    const { organization, members, localization, earnings } = props;
    return (
        <Card className="rainbow-p-around_small rainbow-flex rainbow-justify_space-around rainbow-m-bottom_small rainbow-flex_wrap">
            <Column label="Organization" description={organization}/>
            <Column label="Members" description={members}/>
            <Column label="Localization" description={localization}/>
            <Column label="Earnings" description={earnings}/>
        </Card>
    );
}

<div className="rainbow-m-around_large">
    <ExampleCard
        organization="Nexxtway"
        localization="Miami, Fl"
        earnings="$120 M"
        members={
            <AvatarGroup
                avatars={avatars}
                maxAvatars={3}
                size='small'
            />
        }
    />
    <ExampleCard
        organization="NexxtwayMX"
        localization="Guadalajara, Jl"
        earnings="$50 M"
        members={
            <AvatarGroup
                avatars={avatars}
                maxAvatars={2}
                size='small'
            />
        }
    />
    <ExampleCard
        organization="Rainbow"
        localization="world-wide"
        earnings="free"
        members={
            <AvatarGroup
                avatars={avatars}
                maxAvatars={5}
                showCounter
                size='small'
            />
        }
    />
</div>
```
