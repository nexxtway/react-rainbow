##### button brand
```js
import React from 'react';
import { Application, Button } from 'react-rainbow-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#ffcc23',
        },
    },
};

<Application theme={theme} className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Button
        label="Button Brand"
        onClick={() => alert('clicked!')}
        variant="brand"
        className="rainbow-m-around_medium"
    />
</Application>
```

##### theme example
```js
import React, { useState } from 'react';
import {
    Application,
    Button,
    ButtonGroup,
    ButtonIcon,
    ButtonMenu,
    MenuItem,
    MenuDivider,
    Input,
    Sidebar,
    SidebarItem,
    Card,
    ProgressCircular,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faCircle,
    faEllipsisV,
    faSearch,
    faTasks
} from '@fortawesome/free-solid-svg-icons';
import Facebook from '../exampleComponents/Icons/facebook';
import Google from '../exampleComponents/Icons/google';
import Twitter from '../exampleComponents/Icons/twitter';
import Linkedin from '../exampleComponents/Icons/linkedin';
import dashboard from '../../assets/icons/dashboard.svg';
import puzzle from '../../assets/icons/puzzle.svg';
import messages from '../../assets/icons/messages.svg';
import styled from 'styled-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#6860db',
            mainBackground: '#f2f2f2',
        },
    },
};

const containerStyles = {
    maxWidth: 200,
};
const Container = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    position: relative;
    padding-left: 90px;
    min-height: 257px;
`;

const Title = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.brand.main};
    font-size: 1.25rem;
    margin-right: 2rem;
    margin-left: 2rem;
    padding-top: 1rem;
`;
const Subtitle = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};
    font-size: 1rem;
    margin-right: 2rem;
    margin-left: 2rem;
`;

const SidebarContainer = styled.aside.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    width: 88px;
    position: absolute;
    border-bottom-left-radius: 0.875rem;
    left: 0px;
    height: 100%;
`;

const SimpleSidebar = function(props) {
    const [activeItem, setActiveItem] = useState('Dashboard');
    return (
        <Sidebar selectedItem={activeItem} onSelect={(e, name) => setActiveItem(name)} id="sidebar-1">
            <SidebarItem icon={<img src={dashboard} />} name="Dashboard" label="Dashboard" />
            <SidebarItem icon={<img src={puzzle} />} name="Components" label="Components" />
            <SidebarItem icon={<img src={messages} />} name="Messages" label="Messages" />
        </Sidebar>
    );
};

const Content = styled.section`
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

const SocialCard = styled(Card)`
    background-color: ${props => props.background};
    color: ${props => props.color};  
`;

const SocialContentCount = styled.h2.attrs(props => {
   return props.theme.rainbow.palette;
})`
    font-size: 28px; 
`;

const ActiveCirlce = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 24;
    height: 20;
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    margin-right: 8px;
    color: ${props => props.color};
`;

const PercentHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const PercentSubtitle = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};
    font-size: 1rem;
`;

const socials = [
    {
        url: 'https://facebook.com',
        name: 'facebook',
        icon: <Facebook color="#ffffff"/>,
        countInThousands: 143,
        percent: 60,
        background: '#3c5997',
        color: '#ffffff',
    },
    {
        url: 'https://google.com',
        name: 'google',
        icon: <Google/>,
        countInThousands: 20,
        percent: 45,
        background: '#ffffff',
        color: '#f14336',
    },
    {
        url: 'https://twitter.com',
        name: 'twitter',
        icon: <Twitter color="#ffffff"/>,
        countInThousands: 13,
        percent: 72,
        background: '#00b0f3',
        color: '#ffffff',
    },
    {
        url: 'https://linkedin.com',
        name: 'linkedin',
        icon: <Linkedin color="#ffffff"/>,
        countInThousands: 10,
        percent: 30,
        background: '#0077b5',
        color: '#ffffff',
    }
];

const Social = function (props) {
    const { socials } = props;
    const renderCards = socials.map( (social, index) => {
        return (
            <SocialContentLink key={index} href={social.url} target="_blank">
                <SocialCard 
                    background={social.background} 
                    color={ social.name === 'google' ? '#061c3f' : social.color} 
                    className="rainbow-m-horizontal_medium rainbow-p-around_medium rainbow_vertical-stretch rainbow-m-bottom_medium"
                >
                    <SocialContent className="rainbow-inline-flex rainbow-align-content_space-between">
                        <div>
                            {social.icon}
                        </div>
                        <div>
                            <span>{ social.name }</span>
                            <SocialContentCount>{ social.countInThousands}K</SocialContentCount>
                        </div>
                    </SocialContent>
                </SocialCard>
            </SocialContentLink>
        );
    });
    return (
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">{renderCards}</Content>
    );
};

const ColorProgressCircular = styled(ProgressCircular)`
    circle:nth-child(2) {
        stroke: ${props => props.color};
    }
    h1 {
        color: ${props => props.color};
    }
`;

const SocialPercent = function (props) {
    const { socials } = props;
    const renderCards = socials.map( (social, index) => {
        return (
            <Card key={index} className="rainbow-m-horizontal_large rainbow-m-bottom_large rainbow-p-around_small">
                <PercentHeader className="rainbow-font-size-heading_medium">{social.name}</PercentHeader>
                <PercentSubtitle>Active users</PercentSubtitle>
                <div className="rainbow-p-around_medium">
                    <ColorProgressCircular
                    color={ social.name === 'google' ? social.color : social.background}
                    value={social.percent} />
                </div>
                <div className="rainbow-flex rainbow_vertical-stretch">
                    <ActiveCirlce color={ social.name === 'google' ? social.color : social.background}>
                        <FontAwesomeIcon icon={faCircle} />
                    </ActiveCirlce>
                    <h3 className="rainbow-font-size_small">Active Now</h3>
                </div>
            </Card>
        );
    });
    return (
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">{renderCards}</Content>
    )
};

<Application theme={theme}>
    <GlobalHeader src="images/user/user2.jpg">
        <Input
        label="aplication component search"
        hideLabel
        placeholder="Search"
        icon={<FontAwesomeIcon icon={faSearch}/>}
        type="search"
        className="rainbow-m-right_small"
        />
        <ButtonGroup>
            <ButtonIcon
                variant="border"
                icon={<FontAwesomeIcon icon={faPlus} />}
                />
            <ButtonMenu
                menuSize="x-small"
                menuAlignment="right"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
                >
                <MenuItem label="Options" variant="header" />
                <MenuItem label="Menu Item" />
                <MenuItem label="Menu Item" />
                <MenuDivider variant="space" />
                <MenuItem
                label="Right Icon"
                icon={<FontAwesomeIcon icon={faTasks} />}
                iconPosition="right"
                />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
  
    <Container>
        <SidebarContainer>
        <SimpleSidebar/>
        </SidebarContainer>
        <Title>Dashboard</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
        <Social socials={socials}/>
        <SocialPercent socials={socials}/>
  </Container>
</Application>
```