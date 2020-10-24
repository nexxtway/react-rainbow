##### DatePickerModal base:

```js
import React from 'react';
import { Picklist, Option, DatePickerModal } from 'react-rainbow-components';

const initialState = { isOpen: false, selection: { name: '', label: '' } };

function handlePicklistChange(value) {
    if (value.name === 'Custom') {
        setState({
            isOpen: true,
            selectionType: 'range',
            value: null,
            title: 'Select a Date',
        });
    } else {
        setState({ selection: value });
    }
}

function formatDates(dates) {
    if (dates) {
        const startDay = new Intl.DateTimeFormat().format(dates[0]);
        if (dates.length > 1) {
            const endDay = new Intl.DateTimeFormat().format(dates[1]);
            return `${startDay  } - ${  endDay}`;
        }
        return startDay;
    }
    return '';
}

function handleDatePickerChange(value) {
    const formatedDate = formatDates(value);
    if (value.length > 1) {
        setState({
            value,
            selection: { name: 'Custom', label: formatedDate },
            title: formatedDate,
            isOpen: false,
        });
    } else {
        setState({
            value,
            selection: { name: 'Custom', label: formatedDate },
            title: formatedDate,
        });
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
            onChange={handleDatePickerChange}
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
    ButtonMenu,
    MenuItem,
} from 'react-rainbow-components';
import styled from 'styled-components';

const Row = styled.div`
    box-shadow: 0 0 5px ${props => props.theme.rainbow.palette.text.header};
    background-color: ${props => props.theme.rainbow.palette.background.main};
    border-radius: 22px;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
`;

const Column = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9rem 0 0.9rem 0;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

const Divider = styled.div`
    height: 50px;
    width: 1px;
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
            return `${startDay  } - ${  endDay}`;
        }
        return startDay;
    }
    return '';
}

function handleDatePickerChange(value) {
    const formatedDate = formatDates(value);
    if (value.length > 1) {
        setState({
            value,
            dates: formatedDate,
            title: formatedDate,
            isOpen: false,
        });
    } else {
        setState({
            value,
            dates: formatedDate,
            title: formatedDate,
        });
    }
}

    <div className="rainbow-p-around_large">
        <Row>
            <Column>
                <div>
                    <Title>LOCATION</Title>
                    <Features>{state.location}</Features>
                </div>
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
            </Column>
            <Divider />
            <Column>
                <div>
                    <Title>CHECK IN / CHECK OUT</Title>
                    <Features>{state.dates}</Features>
                </div>
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
            </Column>
            <Divider />
            <Column>
                <div>
                    <Title>GUESTS</Title>
                    <Features>{state.guests}</Features>
                </div>
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
            </Column>
        </Row>

        <DatePickerModal
            title={state.title}
            isOpen={state.isOpen}
            value={state.value}
            variant="double"
            selectionType="range"
            onChange={handleDatePickerChange}
            onRequestClose={() => setState({ isOpen: false })}
        />
    </div>
```
