##### button group

```js
import React from 'react';
import { ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="outline-brand" />
        <Button label="Edit" variant="outline-brand" />
        <Button label="Save" variant="outline-brand" />
    </ButtonGroup>
</div>
```

##### button group with overflow menu icon

```js
import React from 'react';
import { ButtonGroup, Button, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-m-horizontal_medium">
    <ButtonGroup>
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" />
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faAngleDown} className="rainbow-color_brand" />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
        </ButtonMenu>
    </ButtonGroup>
</div>
```

##### button group with icon

```js
import React from 'react';
import { ButtonGroup, Button, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faPaste, faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
        </ButtonMenu>
    </ButtonGroup>
</div>
```

##### button group with button disabled

```js
import React from 'react';
import { ButtonGroup, Button, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faPaste, faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="neutral" />
        <Button label="Edit" variant="neutral" />
        <Button label="Save" variant="neutral" disabled />
        <ButtonIcon
            variant="border-filled"
            disabled
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="neutral">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="neutral" disabled>
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="neutral" disabled>
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonIcon
            variant="border-filled"
            disabled
            icon={<FontAwesomeIcon icon={faAngleDown} />}
        />
    </ButtonGroup>
</div>
```

##### buttons group with button inverse

```js
import React from 'react';
import { ButtonGroup, Button, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faPaste, faAngleDown } from '@fortawesome/free-solid-svg-icons';

<InverseContainer className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <ButtonGroup className="rainbow-m-around_medium">
        <Button label="Refresh" variant="border-inverse" />
        <Button label="Edit" variant="border-inverse" />
        <Button label="Save" variant="border-inverse" />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
            Add
        </Button>
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
            Edit
        </Button>
        <Button variant="border-inverse">
            <FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
            Paste
        </Button>
    </ButtonGroup>
    <ButtonGroup className="rainbow-m-around_medium">
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faPaste} />} />
        <ButtonIcon variant="border-inverse" icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </ButtonGroup>
</InverseContainer>
```

##### button group with content layout

```js
import { ButtonGroup, Button, ButtonMenu, MenuItem, Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeadingContent = styled.div`
    @media (max-width: 991px) {
        flex-direction: column;
        :nth-child(1) { text-align: center; }
    }
`;

const Title = styled.h2.attrs(props => {
   return props.theme.rainbow.palette;
})`
    font-size: 26px;
    color: ${props => props.text.label}
`;

const SubTitle = styled.span.attrs(props => {
   return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};
`;

const Container = styled.div`
    max-width: 780px;
    margin: auto;
`;

const Content = styled.div`
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const SocialContent = styled.div`
    > div:last-child { text-align: right; }
`;

const SocialContentLink = styled.a`
    width: 100%;
    text-decoration: none;
    &:hover, &:focus { text-decoration: none; }

    :nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
    }
    @media (max-width: 767px) {
        max-width: 235px;
    }
`;

const SocialContentName = styled.span.attrs(props => {
   return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};  
`;

const SocialContentCount = styled.h2.attrs(props => {
   return props.theme.rainbow.palette;
})`
    font-size: 28px;
    color: ${props => props.text.main};  
`;

const StyledButtonMenuIcon = styled(FontAwesomeIcon).attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.brand.main};
`;

const styles = {
    socialCard: { marginLeft: 0, marginRight: 0 },
    facebookIcon: { color: "#3C5997"} ,
    twitterIcon : { color: '#00B0F3' },
};

const socials = [
    {
        url: 'https://facebook.com',
        name: 'facebook',
        icon: <FacebookIcon style={styles.facebookIcon}/>,
        countInThousands: 143
    },
    {
        url: 'https://google.com',
        name: 'google',
        icon: <GoogleIcon />,
        countInThousands: 20
    },
    {
        url: 'https://twitter.com',
        name: 'twitter',
        icon: <TwitterIcon style={styles.twitterIcon} />,
        countInThousands: 42
    }
];

<Container>
    <HeadingContent className="rainbow-p-top_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">
        <div className="rainbow-m-bottom_medium">
            <Title>Social Network</Title>
            <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SubTitle>
        </div>

        <ButtonGroup className="rainbow-m-bottom_medium">
            <Button label="New" variant="neutral" />
            <Button label="Edit" variant="neutral" />
            <Button label="Remove" variant="neutral" />
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<StyledButtonMenuIcon icon={faAngleDown} border={false} />}
            >
                <MenuItem label="Settings" />
                <MenuItem label="Utilities" />
                <MenuItem label="Store" />
            </ButtonMenu>
        </ButtonGroup>
    </HeadingContent>

    <Content className="rainbow-p-bottom_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">

        {socials.map( (social) => {
            return (
                <SocialContentLink href={social.url} target="_blank">
                    <Card className="rainbow-m-horizontal_medium rainbow-p-around_medium rainbow_vertical-stretch rainbow-m-bottom_medium"
                        style={styles.socialCard}>

                        <SocialContent className="rainbow-inline-flex rainbow-align-content_space-between">
                            <div>
                                {social.icon}
                            </div>
                            <div>
                                <SocialContentName>{ social.name }</SocialContentName>
                                <SocialContentCount>{ social.countInThousands}K</SocialContentCount>
                            </div>
                        </SocialContent>

                    </Card>
                </SocialContentLink>
            );
        })}

    </Content>
</Container>
```
