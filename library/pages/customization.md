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

const Title = styled.h2`
    color: ${props => props.theme.rainbow.palette.brand.main};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
    padding-top: 1rem;
`;

const Subtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
    margin-right: 0.5rem;
    margin-left: 1rem;
`;

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
`;

const Container = styled.section`
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    margin: 24px auto;
`;

const PercentCardHeader = styled.div`
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const PercentCardSubtitle = styled.h3`
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
    const { name, percent, trend, variant } = props;

    return (
        <Card className="rainbow-m-around_small rainbow-p-around_small">
            <PercentCardHeader className="rainbow-font-size-heading_medium">{name}</PercentCardHeader>
            <PercentCardSubtitle>New users</PercentCardSubtitle>
            <div className="rainbow-p-around_medium">
                <ProgressCircular variant={variant} value={percent} />
            </div>
            <div className="rainbow-flex rainbow_vertical-stretch">
                <StyledIcon icon={trend < 0 ? faArrowDown : faArrowUp}/>
                <StyledTrend>{trend < 0 ? trend * -1 : trend} % </StyledTrend>
                <h3 className="rainbow-font-size_small"> {trend < 0 ? "Decrease" : "Increase"} </h3>
            </div>
        </Card>
    );
}

const theme = {
    rainbow: {
        palette: {
            success: '#44d7b6',
            error: '#f14336',
            warning: '#f7b500',
            brand: '#6860db',
            mainBackground: '#f4f5f7',
        },
    },
};

const themeLightPurple = {
    rainbow: {
        palette: {
            brand: '#8F89E7',
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
    <Container>
        <Content>
            <div>
                <Title>Dashboard</Title>
                <Subtitle>February Summary</Subtitle>
            </div>
            <Button className="rainbow-m-right_small" variant="brand">Import Data</Button>
        </Content>
        <Content>
            <PercentCard variant="success" name="Whatsapp" percent={60} trend={10} />
            <PercentCard variant="error" name="Google" percent={40} trend={-60} />
            <PercentCard variant="warning" name="Snapchat" percent={55} trend={-5} />
            <Application theme={themeLightPurple}>
                <PercentCard variant="brand" name="Rainbow" percent={70} trend={10} />
            </Application>
        </Content>
    </Container>
</Application>
```
