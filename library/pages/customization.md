##### button brand
```js
import React from 'react';
import { Application, Button } from 'react-rainbow-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#5c56b6',
        },
    },
};

<Application theme={theme} className="rainbow-p-vertical_xx-large rainbow-align-content_center">
    <Button
        label="Button Brand"
        onClick={() => alert('clicked!')}
        variant="brand"
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
    Card,
    ProgressCircular,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisV,
    faSearch,
    faArrowDown,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#6860db',
        },
    },
};

const Title = styled.h2`
    color: ${props => props.theme.rainbow.palette.brand.main};
    font-size: 1.25rem;
    margin-right: 2rem;
    margin-left: 2rem;
    padding-top: 1rem;
`;

const Subtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
    margin-right: 2rem;
    margin-left: 2rem;
`;

const platforms = [
    {
        url: 'https://whatsapp.com',
        name: 'WhatsApp',
        percent: 60,
        trend: 10,
        color: '#44d7b6',
    },
    {
        url: 'https://google.com',
        name: 'Google',
        percent: 40,
        trend: -60,
        color: '#f14336',
    },
    {
        url: 'https://snapchat.com',
        name: 'Snapchat',
        percent: 55,
        trend: -5,
        color: '#f7b500',
    },
    {
        url: 'https://react-rainbow.firebaseapp.com/',
        name: 'Rainbow',
        percent: 70,
        trend: 10,
        color: '#5c56b6',
    },
];

const Content = styled.section`
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const PercentHeader = styled.div`
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const PercentSubtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
`;

const ColorProgressCircular = styled(ProgressCircular)`
    circle:nth-child(2) {
        stroke: ${props => props.color};
    }
    h1 {
        color: ${props => props.color};
    }
`;

const StyledTrend = styled.span`
    color: ${props => props.color};
    margin: 0 5px;
`;

const PlatformTrend = function(props) {
    const { trend, color } = props;
    if (trend < 0) {
        return (
            <div className="rainbow-flex rainbow_vertical-stretch">
                <FontAwesomeIcon icon={faArrowDown} color={color}/> 
                <StyledTrend color={color}>{trend * -1} % </StyledTrend>
                <h3 className="rainbow-font-size_small"> Decrease</h3>
            </div>
        );
    }
    return (
        <div className="rainbow-flex rainbow_vertical-stretch">
            <FontAwesomeIcon icon={faArrowUp} color={color}/> 
            <StyledTrend color={color}>{trend} % </StyledTrend>
            <h3 className="rainbow-font-size_small"> Increase</h3>
        </div>
    );
};

const PlatformPercent = function (props) {
    const { platforms } = props;
    const renderCards = platforms.map( (platform, index) => {
        return (
            <Card key={index} className="rainbow-m-horizontal_large rainbow-m-bottom_large rainbow-p-around_small">
                <PercentHeader className="rainbow-font-size-heading_medium">{platform.name}</PercentHeader>
                <PercentSubtitle>New users</PercentSubtitle>
                <div className="rainbow-p-around_medium">
                    <ColorProgressCircular
                    color={platform.color}
                    value={platform.percent} />
                </div>
                <PlatformTrend trend={platform.trend} color={platform.color}/>
            </Card>
        );
    });
    return (
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-flex">{renderCards}</Content>
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
            <ButtonIcon
                variant="border"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
        </ButtonGroup>
    </GlobalHeader>
    <section className="rainbow-m-horizontal_xx-large">
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-flex">
            <div>
                <Title>Dashboard</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
            </div>
            <Button className="rainbow-m-right_large" variant="brand">Import Data</Button>
        </Content>
        <PlatformPercent platforms={platforms}/>
    </section>
</Application>
```