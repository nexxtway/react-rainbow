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

const StyledTrend = styled.span`
    color: ${props => props.theme.rainbow.palette.brand.main};
    margin: 0 5px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const PercentCard = function(props) {
    const { name, percent, trend } = props;

    return (
        <Card className="rainbow-m-horizontal_large rainbow-m-bottom_large rainbow-p-around_small">
            <PercentHeader className="rainbow-font-size-heading_medium">{name}</PercentHeader>
            <PercentSubtitle>New users</PercentSubtitle>
            <div className="rainbow-p-around_medium">
                <ProgressCircular varient="brand" value={percent} />
            </div>
            <div className="rainbow-flex rainbow_vertical-stretch">
                <StyledIcon icon={trend < 0 ? faArrowDown : faArrowUp}/> 
                <StyledTrend >{trend < 0 ? trend * -1 : trend} % </StyledTrend>
                <h3 className="rainbow-font-size_small"> {trend < 0 ? "Decrease" : "Increase"} </h3>
            </div>
        </Card>
    );
}

const whatsappTheme = {
    rainbow: {
        palette: {
            brand: '#44d7b6',
        },
    },
};
const googleTheme = {
    rainbow: {
        palette: {
            brand: '#f14336',
        },
    },
};
const snapchatTheme = {
    rainbow: {
        palette: {
            brand: '#f7b500',
        },
    },
};

<Application theme={theme}>
    <GlobalHeader src="images/user/user2.jpg">
        <Input
        label="aplication component search"
        hideLabel
        placeholder="Search"
        icon={<StyledIcon icon={faSearch}/>}
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
        <Content className="rainbow-p-vertical_large rainbow-align-content_space-between rainbow-flex">
            <Application theme={whatsappTheme}>
                <PercentCard name="Whatsapp" percent={60} trend={10} />
            </Application>
            <Application theme={googleTheme}>
                <PercentCard name="Google" percent={40} trend={-60} />
            </Application>
            <Application theme={snapchatTheme}>
                <PercentCard name="Snapchat" percent={55} trend={-5} />
            </Application>
            <PercentCard name="Rainbow" percent={70} trend={10} />
        </Content>
    </section>
</Application>
```