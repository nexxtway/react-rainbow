##### button brand
```js
import React from 'react';
import { Button } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <Button
        label="Button Brand"
        onClick={() => alert('clicked!')}
        variant="brand"
        className="rainbow-m-around_medium"
    />
</div>
```

##### theme example
```js
import React from 'react';
import {
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
import FacebookIcon from '../exampleComponents/Icons/facebookIcon';
import GoogleIcon from '../exampleComponents/Icons/googleIcon';
import TwitterIcon from '../exampleComponents/Icons/twitterIcon';
import LinkedinIcon from '../exampleComponents/Icons/linkedinIcon';
import dashboard from '../../assets/icons/dashboard.svg';
import puzzle from '../../assets/icons/puzzle.svg';
import messages from '../../assets/icons/messages.svg';
import styled from 'styled-components';

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

class SimpleSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Dashboard',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;

        return (
            <Sidebar selectedItem={selectedItem} onSelect={this.handleOnSelect} id="sidebar-1">
                <SidebarItem icon={<img src={dashboard} />} name="Dashboard" label="Dashboard" />
                <SidebarItem icon={<img src={puzzle} />} name="Components" label="Components" />
                <SidebarItem icon={<img src={messages} />} name="Messages" label="Messages" />
            </Sidebar>
        );
    }
}

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
        icon: <FacebookIcon color="#ffffff"/>,
        countInThousands: 143,
        percent: 60,
        background: '#3c5997',
        color: '#ffffff',
    },
    {
        url: 'https://google.com',
        name: 'google',
        icon: <GoogleIcon/>,
        countInThousands: 20,
        percent: 45,
        background: '#ffffff',
        color: '#f14336',
    },
    {
        url: 'https://twitter.com',
        name: 'twitter',
        icon: <TwitterIcon color="#ffffff"/>,
        countInThousands: 13,
        percent: 72,
        background: '#00b0f3',
        color: '#ffffff',
    },
    {
        url: 'https://linkedin.com',
        name: 'linkedin',
        icon: <LinkedinIcon color="#ffffff"/>,
        countInThousands: 10,
        percent: 30,
        background: '#0077b5',
        color: '#ffffff',
    }
];

<div>
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
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">
            {socials.map( (social) => {
                return (
                    <SocialContentLink href={social.url} target="_blank">
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
            })}
        </Content>
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-m-horizontal_medium rainbow-flex">
            {socials.map( (social) => {
                return (
                    <Card className="rainbow-m-horizontal_large rainbow-m-bottom_large rainbow-p-around_small">
                        <PercentHeader className="rainbow-font-size-heading_medium">{social.name}</PercentHeader>
                        <PercentSubtitle>Active users</PercentSubtitle>
                        <div className="rainbow-p-around_medium">
                            <ProgressCircular
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
            })}
        </Content>
  </Container>
</div>
```