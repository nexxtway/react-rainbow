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

const Container = styled.div`
    background-color: ${props => props.theme.rainbow.palette.background.secondary};
    padding-bottom: 40px;
    border-radius: 0 0 0.875rem 0.875rem;
}
`;
const Title = styled.h2`
    color: ${props => props.theme.rainbow.palette.brand.main};
    font-size: 1.5rem;
    margin: 0 0.5rem 0 1rem;
    font-weight: 500;
`;

const Subtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
    margin: 0 0.5rem 0 1rem;
`;

const Section = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 30px auto auto auto;
`;

const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
`;

const PercentCardHeader = styled.h2`
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 1.25rem;
`;

const PercentCardSubtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
`;

const colorMap = {
    'brand': palette => palette.brand.main,
    'success': palette => palette.success.main,
    'warning': palette => palette.warning.main,
    'error': palette => palette.error.main,
};

const StyledPercent = styled.span`
    color: ${props => props.variant && colorMap[props.variant](props.theme.rainbow.palette)};
    margin: 0 5px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: ${props => props.variant && colorMap[props.variant](props.theme.rainbow.palette)};
`;

const PercentCard = function(props) {
    const { name, percent, trend, variant } = props;
    const icon = trend < 0 ? faArrowDown : faArrowUp;
    const percentTrend = trend < 0 ? trend * -1 : trend;

    return (
        <Card className="rainbow-m-around_small rainbow-p-around_small">
            <PercentCardHeader className="rainbow-font-size-heading_medium">{name}</PercentCardHeader>
            <PercentCardSubtitle>New users</PercentCardSubtitle>
            <div className="rainbow-p-around_medium">
                <ProgressCircular variant={variant} value={percent} />
            </div>
            <div className="rainbow-flex rainbow-align_center">
                <StyledIcon variant={variant} icon={icon}/>
                <StyledPercent variant={variant}>{percentTrend} % </StyledPercent>
                <h3 className="rainbow-font-size-heading_small"> {trend < 0 ? "Decrease" : "Increase"} </h3>
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

const themeBlue = {
    rainbow: {
        palette: {
            brand: '#01B6F5',
            mainBackground: '#f4f5f7',
        },
    },
};

<Application theme={theme}>
    <Container>
        <GlobalHeader>
            <Input
                label="aplication component search"
                hideLabel
                placeholder="Search"
                icon={<StyledIcon icon={faSearch}/>}
                type="search"
                className="rainbow-m-right_small"
            />
            <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEllipsisV} />} />
        </GlobalHeader>
        <Section>
            <Content>
                <div>
                    <Title>Dashboard</Title>
                    <Subtitle>February Summary</Subtitle>
                </div>
                <Button label="Import Data" className="rainbow-m-right_small" variant="brand" />
            </Content>
            <Content>
                <PercentCard variant="success" name="Whatsapp" percent={60} trend={10} />
                <PercentCard variant="error" name="Google" percent={40} trend={-60} />
                <PercentCard variant="warning" name="Snapchat" percent={55} trend={-5} />
                <Application theme={themeBlue}>
                    <PercentCard variant="brand" name="Rainbow" percent={70} trend={10} />
                </Application>
            </Content>
        </Section>
    </Container>
</Application>
```

##### How customize the main color for all the components on my app?
```js
import React, {useState} from 'react';
import {
    Application,
    Card,
    Calendar,
    Avatar,
    ButtonGroup,
    ButtonIcon,
    CheckboxGroup
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const theme = {
    rainbow: {
        palette: {
            brand: '#80deea',
            mainBackground: '#303030',
        },
    },
};

const Container = styled.div`
    background-color: ${props => props.theme.rainbow.palette.background.secondary};
    padding: 40px 0;
    border-radius: 0 0 0.875rem 0.875rem;
`;

const Section = styled.section`
    max-width: 900px;
    padding: 0.5rem;
    margin: auto;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const CalendarCard = styled(Card)`
    padding: 1.5rem;
    margin-bottom: 20px;
`;

const Profile = styled.div`
    min-width: 300px;
`;
const ProfileInfoItem = styled.div`
    margin-bottom: 5px;
    margin-left: 10px;
    :last-child{ margin-bottom: 0; }
`;

const ProfileLabel = styled.label`
    font-size: 14px;
    color: ${props => props.theme.rainbow.palette.text.label}   
`;

const ProfileName = styled.h2`
    font-size: 16px;
    color: ${props => props.theme.rainbow.palette.text.main}
`;

const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const initialDate = new Date('2019-11-11 00:00:00');
const calendarContainerStyles = {
    width: '28rem',
    height: '25rem',
};

const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'react', label: 'React' },
    { value: 'react-native', label: 'React Native' },
    { value: 'objective-c', label: 'Objective C' },
    { value: 'java', label: 'Java' },
];
const defaultOptions = ['react'];

const CalendarProfile = () => {
    const [skills, setSkills] = useState(defaultOptions);
    const [date, setDate] = useState(initialDate)

    return (
        <Application theme={theme}>
            <Container>
                <Section>
                <Content>
                    <CalendarCard style={calendarContainerStyles}>
                        <Calendar
                            id="calendar-1"
                            value={date}
                            minDate={new Date(2018, 0, 4)}
                            maxDate={new Date(2020, 0, 4)}
                            onChange={setDate}
                        />
                    </CalendarCard>
                    <Profile>
                        <Content className="rainbow-m-bottom_medium">
                            <Content>
                                <Avatar
                                assistiveText="Albert Bush"
                                initials="AB"
                                title="Albert Bush"
                                size="large"
                                />
                                <ProfileInfoItem>
                                    <ProfileLabel>User Name</ProfileLabel>
                                    <ProfileName>Albert Bush</ProfileName>
                                </ProfileInfoItem>
                            </Content>
                            <ButtonGroup>
                                <ButtonIcon variant="border-filled" icon={<StyleFontAwesomeIcon icon={faPlus} />} />
                                <ButtonIcon variant="border-filled" icon={<StyleFontAwesomeIcon icon={faPencilAlt} />} />
                            </ButtonGroup>
                        </Content>
                        <CheckboxGroup
                            id="checkbox-group-1"
                            label="Skills"
                            options={options}
                            value={skills}
                            onChange={setSkills}
                        />
                    </Profile>
                </Content>
                </Section>
            </Container>
        </Application>
    );
}

<CalendarProfile />
```

##### Theme variation for a specific component
```js
import React from 'react';
import { Application, Card } from 'react-rainbow-components';
import styled from 'styled-components';

const theme = {
    rainbow: {
        palette: {
            mainBackground: '#fbfcfd',
        },
    },
};

const customTheme = {
    rainbow: {
        palette: {
            mainBackground: '#3c5997',
        },
    },
};

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 40px auto 30px auto;
    max-width: 860px;
`;

const SocialCard = styled(Card)`
    padding: 1rem;
    margin: 12px;
    width: 250px;
`

const SocialContentName = styled.span`
    color: ${props => props.theme.rainbow.palette.text.main};  
`;

const SocialContentCount = styled.h2`
    font-size: 28px;
    color: ${props => props.theme.rainbow.palette.text.main};  
`;

const twitterIconStyle = { color: "#00b0f3" };

const SocialCounter = (props) => {
    const { name, icon, countInThousands } = props;

    return (
        <SocialCard className="rainbow-inline-flex rainbow-align-content_space-between">
            <div>
                {icon}
            </div>
            <div>
                <SocialContentName>{name}</SocialContentName>
                <SocialContentCount>{countInThousands}K</SocialContentCount>
            </div>
        </SocialCard>
    );
}

<Application theme={theme}>
    <Section>
        <SocialCounter name="google" icon={<GoogleIcon />} countInThousands={20} />
        <Application theme={customTheme}>
            <SocialCounter name="facebook" icon={<FacebookIcon />} countInThousands={143} />
        </Application>
        <SocialCounter name="twitter" icon={<TwitterIcon style={twitterIconStyle} />} countInThousands={20} />
    </Section>
</Application>
```

##### Theme variation for your own UI
```js
import React from 'react';
import {
    Application,
    Card,
    ProgressCircular,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Section = styled.section`
    max-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px auto;
`;

const PercentCardHeader = styled.h2`
    color: ${props => props.theme.rainbow.palette.text.main};
    font-size: 1rem;
`;

const PercentCardSubtitle = styled.h3`
    color: ${props => props.theme.rainbow.palette.text.header};
    font-size: 1rem;
`;

const colorMap = {
    'brand': palette => palette.brand.main,
    'success': palette => palette.success.main,
    'error': palette => palette.error.main,
};

const ActiveCirlce = styled.span`
    width: 24px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    color: ${props => props.variant && colorMap[props.variant](props.theme.rainbow.palette)};
`;

const theme = {
    rainbow: {
        palette: {
            success: '#44d7b6',
            error: '#f14336',
            brand: '#32c5ff',
        },
    },
};

const PercentCard = function(props) {
    const { name, percent, variant } = props;

    return (
      <Application theme={theme}>
        <Card className="rainbow-m-around_small rainbow-p-around_small">
            <PercentCardHeader className="rainbow-font-size-heading_medium">{name}</PercentCardHeader>
            <PercentCardSubtitle>New {name} users</PercentCardSubtitle>
            <div className="rainbow-p-around_medium">
                <ProgressCircular variant={variant} value={percent} />
            </div>
            <div className="rainbow-flex rainbow-align_center">
                <ActiveCirlce variant={variant}>
                    <FontAwesomeIcon icon={faCircle} />
                </ActiveCirlce>
                <PercentCardHeader>Active</PercentCardHeader>
            </div>
        </Card>
      </Application>
    );
};

<Section>
    <PercentCard variant="error" name="google" percent={45} />
    <PercentCard variant="success" name="whatsapp" percent={60} />
    <PercentCard variant="brand" name="rainbow" percent={72} />
</Section>
```
