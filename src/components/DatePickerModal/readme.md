##### DatePickerModal base:

```js
import React from 'react';
import { Picklist, Option, DatePickerModal } from 'react-rainbow-components';

initialState = { isOpen: false, selection: { name: '', label: '' } };

function handlePicklistChange(value) {
    if (value.name === 'Custom') {
        setState({
            isOpen: true,
            selectionType: 'range',
            value: null,
            title: 'Select a Date',
        });
    } else {
        setState({ selection: { name: value.name, label: value.name } });
    }
}

function formatDates(dates) {
    if (dates) {
        const startDay = new Intl.DateTimeFormat().format(dates[0]);
        if (dates.length > 1) {
            const endDay = new Intl.DateTimeFormat().format(dates[1]);
            return startDay + ' - ' + endDay;
        }
        return startDay;
    }
}

const containerStyles = {
    width: '160px',
};

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader src="images/user/user3.jpg">
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                value={state.selection}
                style={containerStyles}
                placeholder="Select Date"
                onChange={handlePicklistChange}
            >
                <Option name="Custom" label="Custom" />
                <Option name="Today" label="Today" />
                <Option name="Yesterday" label="Yesterday" />
                <Option name="This Week" label="This Week" />
            </Picklist>
        </div>
    </GlobalHeader>
    <DatePickerModal
        title={state.title}
        isOpen={state.isOpen}
        variant="double"
        value={state.value}
        selectionType="range"
        onChange={value => {
            value.length > 1
                ? setState({
                      value,
                      selection: { name: 'Custom', label: formatDates(value) },
                      title: formatDates(value),
                      isOpen: false,
                  })
                : setState({
                      value,
                      selection: { name: 'Custom', label: formatDates(value) },
                      title: formatDates(value),
                  });
        }}
        onRequestClose={() => setState({ isOpen: false })}
    />
</div>
```

##### DatePickerModal select date range:

```js
import React from 'react';
import {
    DatePickerModal,
    ButtonIcon,
    ButtonGroup,
    ButtonMenu,
    MenuItem,
} from 'react-rainbow-components';
import styled from 'styled-components';

const Row = styled.div`
    box-shadow: 0 0 5px ${props => props.theme.rainbow.palette.text.header};
`;

const Column = styled.div`
    width: 300px;
    padding: 0.9rem 0 0.9rem 0;
    @media screen and (max-width: 1025px) {
        width: 550px;
    }
    @media screen and (max-width: 500px) {
        width: 200px;
    }
`;

const Divider = styled.div`
    height: 50px;
    width: 2px;
    margin: 1rem 0;
    background-color: ${props => props.theme.rainbow.palette.border.divider};
    @media screen and (max-width: 1025px) {
        height: 2px;
        width: 550px;
    }
    @media screen and (max-width: 500px) {
        width: 190px;
    }
`;

const Title = styled.h4`
    color: ${props => props.theme.rainbow.palette.text.main};
    widht: 100%;
    font-size: 0.8rem;
    margin: 0 0 0 0.5rem;
    font-weight: 900;
`;

const Features = styled.p`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 0.8rem;
    margin: 0 0 0 0.5rem;
`;

const initialState = {
    location: 'Where are you going?',
    guests: 'Add guests',
    dates: 'Add dates',
    isOpen: false,
};

const ArrowIcon = styled(ArrowDownIcon)`
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const setLocation = value => {
    setState({ location: value });
};

const setGuests = value => {
    setState({ guests: value });
};

function formatDates(dates) {
    if (dates) {
        const startDay = new Intl.DateTimeFormat().format(dates[0]);
        if (dates.length > 1) {
            const endDay = new Intl.DateTimeFormat().format(dates[1]);
            return startDay + ' - ' + endDay;
        }
        return startDay;
    }
}

<div className="rainbow-p-around_large">
    <Row className=" rainbow-border-radius_oval rainbow-flex rainbow-justify_space-around rainbow-flex_wrap ">
        <Column className="rainbow-flex rainbow-align_start rainbow-justify_spread">
            <div>
                <Title>LOCATION</Title>
                <Features>{state.location}</Features>
            </div>
            <div>
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="x-small"
                    buttonVariant="base"
                    icon={<ArrowIcon />}
                >
                    <MenuItem
                        label="Mexico"
                        onClick={() => {
                            setLocation('Mexico');
                        }}
                    />
                    <MenuItem
                        label="Brasil"
                        onClick={() => {
                            setLocation('Brasil');
                        }}
                    />
                    <MenuItem
                        label="Canada"
                        onClick={() => {
                            setLocation('Canada');
                        }}
                    />
                    <MenuItem
                        label="United State"
                        onClick={() => {
                            setLocation('United State');
                        }}
                    />
                </ButtonMenu>
            </div>
        </Column>
        <Divider className="rainbow-flex rainbow-align_start" />
        <Column className="rainbow-flex rainbow-align_start rainbow-justify_spread">
            <div>
                <Title>CHECK IN / CHECK OUT</Title>
                <Features>{state.dates}</Features>
            </div>
            <div>
                <ButtonIcon
                    icon={<ArrowIcon />}
                    onClick={() =>
                        setState({
                            isOpen: true,
                            selectionType: 'range',
                            value: null,
                            title: 'Select range of dates',
                        })
                    }
                />
            </div>
        </Column>
        <Divider className="rainbow-flex rainbow-align_start" />
        <Column className="rainbow-flex rainbow-align_start rainbow-justify_spread">
            <div>
                <Title>GUESTS</Title>
                <Features>{state.guests}</Features>
            </div>
            <div>
                <ButtonMenu
                    menuAlignment="right"
                    menuSize="xx-small"
                    buttonVariant="base"
                    icon={<ArrowIcon />}
                >
                    <MenuItem
                        label="1"
                        onClick={() => {
                            setGuests('1');
                        }}
                    />
                    <MenuItem
                        label="2"
                        onClick={() => {
                            setGuests('2');
                        }}
                    />
                    <MenuItem
                        label="3"
                        onClick={() => {
                            setGuests('3');
                        }}
                    />
                    <MenuItem
                        label="4"
                        onClick={() => {
                            setGuests('4');
                        }}
                    />
                </ButtonMenu>
            </div>
        </Column>
    </Row>

    <DatePickerModal
        title={state.title}
        isOpen={state.isOpen}
        value={state.value}
        variant="double"
        selectionType="range"
        onChange={value => setState({ value })}
        onChange={value => {
            value.length > 1
                ? setState({
                      value,
                      dates: formatDates(value),
                      title: formatDates(value),
                      isOpen: false,
                  })
                : setState({
                      value,
                      dates: formatDates(value),
                      title: formatDates(value),
                  });
        }}
        onRequestClose={() => setState({ isOpen: false })}
    />
</div>
```
