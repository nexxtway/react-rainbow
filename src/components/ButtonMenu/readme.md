##### button menu base

```js
import React from 'react';
import { ButtonGroup, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            buttonVariant="base"
            icon={<FontAwesomeIcon icon={faCog} />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
            <MenuItem label="Menu Item Four" />
        </ButtonMenu>
    </GlobalHeader>
</div>
```

##### button menu with divider

```js
import React from 'react';
import {
    ButtonGroup,
    ButtonMenu,
    MenuItem,
    ButtonIcon,
    MenuDivider,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faCog,
    faPaste,
    faPlus,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faPaste} />}
                variant="border-filled"
                disabled
            />
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />

                <MenuDivider variant="space" />
                <MenuItem label="Menu Item Four" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>
```

##### button menu with subheaders

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon icon={<FontAwesomeIcon icon={faEdit} />} variant="border-filled" disabled />
            <ButtonMenu
                id="button-menu"
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>
```

##### button menu with icons

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignCenter,
    faAlignLeft,
    faAlignRight,
    faAnchor,
    faPlus,
    faFutbol,
    faBullhorn,
    faStore,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        src="images/user/user3.jpg"
    >
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonMenu
                id="button-menu-1"
                menuSize="x-small"
                menuAlignment="right"
                icon={<FontAwesomeIcon icon={faStore} />}
            >
                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faFutbol} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faAnchor} />}
                    iconPosition="right"
                />

                <MenuItem
                    label="Right Icon"
                    icon={<FontAwesomeIcon icon={faBullhorn} />}
                    iconPosition="right"
                />
            </ButtonMenu>
            <ButtonMenu
                id="button-menu-2"
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignCenter} />}
                    iconPosition="left"
                />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignLeft} />}
                    iconPosition="left"
                />

                <MenuItem
                    label="Left Icon"
                    icon={<FontAwesomeIcon icon={faAlignRight} />}
                    iconPosition="left"
                />
            </ButtonMenu>
        </ButtonGroup>
    </GlobalHeader>
</div>
```

##### button menu position variants

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faShareAlt, faPlus, faBell, faSlidersH } from '@fortawesome/free-solid-svg-icons';

<div>
    <GlobalHeader
        className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large"
        src="images/user/user2.jpg"
    >
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonMenu
                menuAlignment="left"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faCog} />}
            >
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
                <MenuItem label="Menu Positioned Left" />
            </ButtonMenu>
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faSlidersH} />}
                variant="border-filled"
                disabled
            />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faShareAlt} />}
                variant="border-filled"
                disabled
            />
        </ButtonGroup>
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            buttonVariant="base"
            icon={<FontAwesomeIcon icon={faBell} />}
        >
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
            <MenuItem label="Menu Positioned Right" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="rainbow-m-horizontal_large rainbow-p-top_xx-large rainbow-m-bottom_large rainbow-grid   rainbow-grid_align-end">
        <ButtonMenu
            menuAlignment="bottom"
            buttonVariant="brand"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faPlus} />}
        >
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
            <MenuItem label="Menu Positioned Bottom" />
        </ButtonMenu>
    </div>
</div>
```

##### button menu width variants

```js
import React from 'react';
import { ButtonGroup, ButtonIcon, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

<div>
    <GlobalHeader className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
            <ButtonMenu
                menuSize="xx-small"
                menuAlignment="right"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
                <MenuItem label="xx-small" />
            </ButtonMenu>
        </ButtonGroup>
        <div className="rainbow-m-right_medium">
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faStore} />}
            >
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
                <MenuItem label="Menu x-small" />
            </ButtonMenu>
        </div>
        <ButtonMenu menuAlignment="right" menuSize="small" icon={<FontAwesomeIcon icon={faBell} />}>
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
            <MenuItem label="Menu small" />
        </ButtonMenu>
    </GlobalHeader>
    <div className="rainbow-m-horizontal_large rainbow-p-top_xx-large rainbow-m-bottom_large rainbow-flex">
        <ButtonGroup className="rainbow-m-right_medium">
            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
            <ButtonMenu
                menuAlignment="left"
                menuSize="large"
                icon={<FontAwesomeIcon icon={faPlus} />}
            >
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
                <MenuItem label="Menu large" />
            </ButtonMenu>
        </ButtonGroup>
        <ButtonMenu
            menuSize="medium"
            menuAlignment="left"
            icon={<FontAwesomeIcon icon={faPencilAlt} />}
        >
            <MenuItem label="Menu medium" />
            <MenuItem label="Menu medium" />
            <MenuItem label="Menu medium" />
        </ButtonMenu>
    </div>
</div>
```

##### button menu with disabled items

```js
import React from 'react';
import { ButtonGroup, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <ButtonMenu
            id="button-menu-disabled-items"
            menuAlignment="right"
            menuSize="x-small"
            buttonVariant="base"
            icon={<FontAwesomeIcon icon={faCog} />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem disabled label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
            <MenuItem label="Menu Item Four" />
            <MenuItem disabled label="Menu Item Five" />
        </ButtonMenu>
    </GlobalHeader>
</div>
```

##### button menu loading

```js
import React from 'react';
import { ButtonGroup, ButtonMenu } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        src="images/user/user3.jpg"
    >
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            label="Custom Apps"
            isLoading
            icon={<FontAwesomeIcon icon={faBell} />}
        />
    </GlobalHeader>
</div>
```
##### ButtonMenu with MenuItems changed dynamically

```js
import React from 'react';
import {
    ButtonGroup,
    ButtonMenu,
    MenuItem,
    ButtonIcon
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencilAlt,
    faAngleDown,
    faPaste,
    faPlus
} from '@fortawesome/free-solid-svg-icons';


class ButtonMenuExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuItemAdded: false,
        };
    }

    addNewMenuItem() {
        const { isMenuItemAdded } = this.state;
        this.setState({ isMenuItemAdded: !isMenuItemAdded  });
    }

    renderNewMenuItem() {
        const { isMenuItemAdded } = this.state;
        if (isMenuItemAdded) {
            return (
                <MenuItem label="Menu Item New" />
            );
        }
        return null;
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                <GlobalHeader
                    src="images/user/user3.jpg"
                    className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
                >
                    <ButtonGroup>
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPencilAlt} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPaste} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonMenu
                            id="button-menu-17"
                            menuAlignment="right"
                            menuSize="x-small"
                            icon={<FontAwesomeIcon icon={faAngleDown} />}
                        >
                            <MenuItem label="Menu Item One" />
                            {this.renderNewMenuItem()}
                            <MenuItem label="Menu Item Two" />
                            <MenuItem label="Menu Item Three" />
                        </ButtonMenu>
                    </ButtonGroup>

                    <ButtonIcon
                        id="button-icon_add-new-menu-item"
                        className="rainbow-m-left_small"
                        onClick={() => this.addNewMenuItem()}
                        variant="border-filled"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                    />
                </GlobalHeader>
            </div>
        );
    }
}
<ButtonMenuExample/>
```

##### ButtonMenu

```js
import React from 'react';
import { ButtonMenu, MenuItem, Card } from 'react-rainbow-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Title = styled.h1.attrs(props => props.theme.rainbow)`
    font-family: 'Lato Light';
    font-size: 24px;
    text-align: left;
    color: ${props => props.palette.text.main};
`;

const CardSubtitle = styled.h4.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 12px;
    color: ${props => props.palette.text.header};
    display: block;
`;

const Label = styled.span.attrs(props => props.theme.rainbow)`
    font-family: Lato Bold;
    font-size: 24px;
    line-height: 24px;
    color: ${props => props.isBrand? props.palette.brand.main : props.palette.text.main};
    text-transform: uppercase;
`;

const Description = styled.span.attrs(props => props.theme.rainbow)`
    font-family: Lato;
    font-size: 14px;
    color: ${props => props.palette.text.header};
`;

const ColumnContainer = styled.div.attrs(props => props.theme.rainbow)`
    min-height: 92px;
    ${props => props.hasBorder && `border-left: 1px dashed ${props.palette.background.disabled};`}
    ${props => (props.width || props.width === 0) && `width: ${props.width};`}
    ${props => (props.flex || props.flex === 0) && `flex: ${props.flex};`}
    @media (max-width: 700px) {
        border-left: none;
        width: 100%;
        ${props => props.hasBorder && `border-top: 1px dashed ${props.palette.background.disabled};`}
    }
`;

const Column = props => {
    const { label, description, isBrand, hasBorder, children, flex, width } = props;

    return (
        <ColumnContainer
            className="rainbow-flex rainbow-flex_column rainbow-justify_center rainbow-align_center"
            hasBorder={ hasBorder }
            flex={flex}
            width={width}
        >
            {children}
            <Label isBrand={isBrand}>
                {label}
            </Label>
            <Description>
                {description}
            </Description>
        </ColumnContainer>
    );
}

const RowContainer = styled.div`
    min-height: 92px;
    ${props => (props.width || props.width === 0) && `width: ${props.width};`}
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const Row = props => {
    const { children, width } = props;
    return (
        <RowContainer className="rainbow-flex rainbow-justify_space-around" width={width}>
            {children}
        </RowContainer>
    );
};

const Point = styled.span.attrs(props => props.theme.rainbow)`
    height: 8px;
    width: 8px;
    background-color: ${props => props.palette.brand.main};
    border-radius: 100px;
    padding: 3px;
`;

const Line = styled.hr.attrs(props => props.theme.rainbow)`
    border-bottom: 1px solid ${props => props.palette.brand.main};
    background-color: ${props => props.palette.brand.main};
    width: 98%;
    margin-left: -2px;
    margin-right: -2px;
`;

const SegmentContainer = styled.div`
    width: 100%;
    height: 20px;
`;

const Segment = props => {
    return (
        <SegmentContainer className="rainbow-flex rainbow-align_center">
            <Point />
            <Line />  
            <Point />  
        </SegmentContainer>
    );
}

const getDateDiference = ( startDate, endDate ) => {
    const startDateInMs = startDate.getTime();
    const endDateInMs = endDate.getTime();
    var differenceInMs = endDateInMs - startDateInMs;
    differenceInMs = differenceInMs/1000/60;
    const minutes = Math.floor(differenceInMs % 60);
    differenceInMs = differenceInMs/60;
    const hours = Math.floor(differenceInMs);

    return `${ hours<10 && 0}${hours}hr ${minutes}min`;
}

const getFormatedTime = ( date ) => {
    return date.toLocaleString('en-US', {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });
}

const getFormatedDate = ( date ) => {
    return date.toLocaleString('en-US', {
        month: 'long',
        day: '2-digit',
    });
}

const FlightCard = ( props ) => {
    const { 
        departureDate,
        arrivalDate,
        origin,
        originAbbreviation,
        destination,
        destinationAbbreviation,
        airline,
        flightNumber,
        price
    } = props;

    return (
        <div className="rainbow-m-top_small">
            <CardSubtitle>
                Departure flight: { origin } - { destination } • { getFormatedDate(departureDate) }
            </CardSubtitle>
            <Card>
                <div className="rainbow-flex rainbow-flex_wrap">
                    <Row width="49%">
                        <Column
                            flex="1"
                            label={originAbbreviation}
                            description={getFormatedTime(departureDate)}
                        />
                        <Column
                            flex="1.3"
                            description={getDateDiference(departureDate, arrivalDate)}
                        >
                            <Segment />
                        </Column>
                        <Column
                            flex="1"
                            label={destinationAbbreviation}
                            description={getFormatedTime(arrivalDate)}
                        />
                    </Row>
                    <Column label={airline} description="Airline" isBrand hasBorder width="17%" />
                    <Column label={flightNumber} description="Flight No" hasBorder width="17%" />
                    <Column label={`$${price}`} description="Total" hasBorder width="17%" />
                </div>
            </Card>
        </div>
    )
}

<div>
    <GlobalHeader
        src="images/user/user3.jpg"
    />
    <div className="rainbow-m-around_large">
        <div className="rainbow-flex rainbow-justify_spread">
            <Title>
                Flight Booking
            </Title>
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
            >
                <MenuItem
                    label="Edit Resevation"
                    icon={<PencilIcon />}
                    iconPosition="left"
                />
                <MenuItem
                    label="Delete Reservation"
                    icon={<TrashIcon />}
                    iconPosition="left"
                />
                <MenuItem
                    label="Add Promo Code"
                    icon={<PricingIcon />}
                    iconPosition="left"
                />
            </ButtonMenu>
        </div>
        <div>
            <FlightCard
                origin="Guadalajara"
                originAbbreviation="GDL"
                destination="New York"
                destinationAbbreviation="NYR"
                departureDate={new Date(2020, 3, 25, 10, 20)}
                arrivalDate={new Date(2020, 3, 25, 19, 50)}
                airline="AirBus"
                flightNumber="2161"
                price="350"
            />
            <FlightCard
                origin="New York"
                originAbbreviation="NYR"
                destination="Guadalajara"
                destinationAbbreviation="GDL"
                departureDate={new Date(2020, 4, 5, 8, 20)}
                arrivalDate={new Date(2020, 4, 5, 17, 50)}
                airline="AirBus"
                flightNumber="3345"
                price="360"
            />
        </div>
    </div>
</div>

```

##### button menu with label

```js
import React from 'react';
import { ButtonGroup, ButtonMenu, MenuItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <ButtonMenu
            menuAlignment="right"
            menuSize="x-small"
            buttonVariant="base"
            label="Config"
            icon={<FontAwesomeIcon icon={faCog} />}
        >
            <MenuItem label="Menu Item One" />
            <MenuItem label="Menu Item Two" />
            <MenuItem label="Menu Item Three" />
            <MenuItem label="Menu Item Four" />
        </ButtonMenu>
    </GlobalHeader>
</div>
```
