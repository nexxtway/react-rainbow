##### AvatarGroup types

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
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

const icon = <img src="icons/user.svg" alt="icon" />;

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

const CardExample = props => {
    const { data } = props;

    const innerObjects = data.map((innerData, idx) => {
        const key = `avatargroup-example-${idx}`;
        return (
                <div 
                    className="rainbow-flex_column rainbow-align-content_space-between"
                    key={key}
                >
                    {innerData}
                </div>
        );
    });

    return (
        <Card
            className="rainbow-p-around_small rainbow-align-content_space-between rainbow-m-bottom_small"
        >
            {innerObjects}
        </Card>
    );
}

const CardExampleData1 = [
    (
        <React.Fragment>
            <CustomText>
                photo-url
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatarsUrl}
                maxAvatars={4}
            />
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <CustomText>
                fallback user initials
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatarsInitials}
                maxAvatars={4}
            />
        </React.Fragment>
    ),
];

const CardExampleData2 = [
    (
        <React.Fragment>
            <CustomText>
                fallback user icon
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatarsIcon}
                maxAvatars={4}
            />
        </React.Fragment>
    ),
    (
        <React.Fragment>
            <CustomText>
                counter
            </CustomText>
            <AvatarGroup
                className="rainbow-m-horizontal_medium"
                avatars={avatarsUrl}
                maxAvatars={3}
                showCounter={true}
            />
        </React.Fragment>
    ),
];

<div className="rainbow-m-around_large">
    <CardExample
        data={CardExampleData1}
    />
    <CardExample
        data={CardExampleData2}
    />
</div>
```

##### photo-url sizes

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
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

const CardExample = props => {
    const { data } = props;

    const innerObjects = data.map((size, idx) => {
        const key = `avatargroup-example-sizes-${idx}`;
        return (
                <div 
                    className="rainbow-flex_column rainbow-align-content_space-between rainbow-m-bottom_small"
                    key={key}
                >
                    <CustomText>
                        {size}
                    </CustomText>
                    <AvatarGroup
                        className="rainbow-m-horizontal_medium"
                        avatars={avatars}
                        maxAvatars={4}
                        size={size}
                    />
                </div>
        );
    });

    return (
        <Card
            className="rainbow-p-around_small"
        >
            {innerObjects}
        </Card>
    );
}

const CardExampleData = [
    "x-small",
    "small",
    "medium",
    "large",
];

<div className="rainbow-m-around_large">
    <CardExample
        data={CardExampleData}
    />
</div>
```

##### AvatarGroup

```js
import React from 'react';
import { AvatarGroup, Card } from 'react-rainbow-components';
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

const CardColumn = props => {
    const { header, data } = props;

    let columnData = data;
    
    if (['Organization', 'Localization', 'Earnings'].includes(header)) {
        columnData = (
            <CustomText
                custom
                variant="brand"
            >
                {data}
            </CustomText>
        );
    };

    return (
            <div 
                className="rainbow-flex_column rainbow-align-content_space-between"
            >
                <CustomText>
                    {header}
                </CustomText>
                {columnData}
            </div>
    );
}

const CardExample = props => {
    const { data } = props;

    const innerObjects = data.map((innerData, idx) => {
        const key = `avatargroup-example-report-${idx}`;
        const columns = Object.entries(innerData);
        const column = columns.map((col, i) => {
            const colKey = `avatargroup-column-${i}`;
            const colHeader = col[0];
            let colData = col[1];
            
            return (
                <CardColumn 
                    header={colHeader}
                    data={colData}
                    key={colKey}
                />
            );
        });
        return (
            <Card
                className="rainbow-p-around_small rainbow-align-content_space-between rainbow-m-bottom_small"
                key={key}
            >
                {column}
            </Card>
        );
    });

    return (     
        <React.Fragment>
            {innerObjects}     
        </React.Fragment>
    );
}

const CardExampleData = [
    {
        Organization: 'Nexxtway',
        Members: (
            <AvatarGroup
                avatars={avatars}
                maxAvatars={3}
                showCounter={true}
                size='small'
            />
        ),
        Localization: 'Miami, FL',
        Earnings: '$120M',
    },
    {
        Organization: 'Rainbow',
        Members: (
            <AvatarGroup
                avatars={avatars}
                maxAvatars={4}
                size='small'
            />
        ),
        Localization: 'Miami, FL',
        Earnings: '$66M',
    },
    {
        Organization: 'OpenSource',
        Members: (
            <AvatarGroup
                avatars={avatars}
                maxAvatars={2}
                size='small'
            />
        ),
        Localization: 'world-wide',
        Earnings: '$8K',
    },
];

<div className="rainbow-m-around_large">
    <CardExample
        data={CardExampleData}
    />
</div>
```
