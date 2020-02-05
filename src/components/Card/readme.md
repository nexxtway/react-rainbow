##### card default with illustration

```js
import React from 'react';
import { Card } from 'react-rainbow-components';

<div className="rainbow-p-around_large">
    <Card>
        <img
            src="images/illustrations/Illustration-rainbow-1.svg"
            className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
            alt="landscape with rainbows, birds and colorful balloons"
        />
    </Card>
</div>
```

##### card-with header and button

```js
import React from 'react';
import { Card, Avatar, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

<div className="rainbow-m-around_large">
    <Card
        icon={<Avatar icon={<FontAwesomeIcon icon={faUser} />} />}
        title="Contact details"
        actions={<Button label="New" variant="outline-brand" />}
    />
</div>
```

##### card-with header and spinner

```js
import React from 'react';
import { Card, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUsers, faEdit, faAngleDown } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-around_large">
    <Card
        isLoading
        icon={<FontAwesomeIcon icon={faUsers} size="lg" className="rainbow-color_brand" />}
        title="Contacts"
        actions={
            <ButtonGroup>
                <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faPlus} />} />
                <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEdit} />} disabled />
                <ButtonIcon
                    variant="border"
                    icon={<FontAwesomeIcon icon={faAngleDown} />}
                    disabled
                />
            </ButtonGroup>
        }
    />
</div>
```

##### card with header and illustration

```js
import React from 'react';
import { Card, ButtonIcon, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faShareAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

<div className="rainbow-m-around_large">
    <Card
        icon={
            <span
                className="rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center"
                style={iconContainerStyles}
            >
                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
            </span>
        }
        title="Task"
        actions={<Button variant="neutral" label="Add" />}
        footer={
            <div className="rainbow-align-content_space-between">
                <div className="rainbow-flex">
                    <ButtonIcon
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        className="rainbow-m-right_xx-small"
                    />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
                </div>
                <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
            </div>
        }
    >
        <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <img
                src="images/illustrations/Illustration-rainbow-2.svg"
                alt="landscape with rainbows and colorful birds"
            />
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small">
                No new tasks
            </h1>
        </div>
    </Card>
</div>
```

##### pricing card

```js
import React from 'react';
import { Card, Button } from 'react-rainbow-components';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Lato Light';
    font-size: 32px;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const Subtitle = styled.h2`
    font-family: 'Lato Light';
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const StyledCard = styled(Card)`
    width: 240px;
    height: 363px;
`;

const StyledH2 = styled.h2`
    font-family: 'Lato Black';
    font-size: 56px;
    font-stretch: normal;
    font-style: normal;
    line-height: 56px;
    letter-spacing: normal;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const StyledH3 = styled.h3`
    font-family: Lato;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const StyledP = styled.p`
    font-family: 'Lato Light';
    font-size: 15px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.5px;
    text-align: center;
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const StyledB = styled.b`
    font-family: 'Lato Bold';
`;

function PriceCard(props) {
    const { packageType, packagePrice, projectsCount, members, contacts} = props;
    return (
        <StyledCard
            className="rainbow-flex rainbow-flex_column rainbow-align_center rainbow-justify_space-around"
        >
            <Subtitle
                style={{
                    textTransform: 'uppercase',
                }}
            >
                { packageType }
            </Subtitle>
            <div
                className="rainbow-flex rainbow-m-bottom_xsmall"
            >
                <StyledH3 
                    style={{
                        paddingTop: '5px'
                    }}
                >$</StyledH3>
                <StyledH2>{ packagePrice }</StyledH2>
                <StyledH3
                    style={{
                        alignSelf: 'flex-end',
                        paddingBottom: '3px'
                    }}
                >
                    /mo
                </StyledH3>
            </div>
            <StyledP><StyledB >{ projectsCount }</StyledB>  Projects</StyledP>
            <StyledP><StyledB>{ members }</StyledB>  Team Members</StyledP>
            <StyledP><StyledB>{ contacts }</StyledB>  Personal Contacts</StyledP>
            <Button
                label="Buy Now!!"
                variant="brand"
            />
        </StyledCard>
    )
}


<div>
    <Title
        className="rainbow-p-top_x-large"
    >
        Our Prices
    </Title>

    <Subtitle
        className="rainbow-p-around_medium"
    >
        You have Free Unlimited Updates and Premium Support on each package.
    </Subtitle>


    <div className="rainbow-flex rainbow-justify_space-around rainbow-flex_wrap rainbow-p-around_medium">
        
        <PriceCard packageType="Standard" packagePrice="24" projectsCount="100" members="5" contacts="50"/>
        <PriceCard packageType="Standard" packagePrice="85" projectsCount="500" members="50" contacts="150"/>
        <PriceCard packageType="Standard" packagePrice="149" projectsCount="1000" members="100" contacts="200"/>
    </div>
</div>

```
