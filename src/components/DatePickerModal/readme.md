##### DatePickerModal base:

```js
import React from 'react';
import { Picklist, Option, DatePickerModal } from 'react-rainbow-components';

initialState = { isOpen: false, selection: { name: '', label: '' } };

function getDates(value, selectionType) {
    if (selectionType === 'single' && Array.isArray(value)) return value[0];
    return value;
}

function setDates(value) {
    if (value) {
        if (value.name === 'Custom') {
            setState({
                isOpen: true,
                selectionType: 'range',
                value: null,
                title: 'Select a Date',
            });
        } else if (value.name === 'Today') {
            let today = new Date();
            today =
                (today.getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                today
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                today.getFullYear();
            setState({ selection: { name: 'Today', label: today } });
        } else if (value.name === 'Yesterday') {
            let yesterday = new Date(Date.now() - 86400000);
            yesterday =
                (yesterday.getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                yesterday
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                yesterday.getFullYear();
            setState({ selection: { name: 'Yesterday', label: yesterday } });
        } else if (value.name === 'This Week') {
            let pickedDate = new Date();
            let startSunday = new Date(pickedDate);
            startSunday.setDate(pickedDate.getDate() - pickedDate.getDay());
            let startMonth = new Date(pickedDate);
            startMonth.setDate(1);
            let startDate = Math.max(startMonth, startSunday);

            let endSaturday = new Date(pickedDate);
            endSaturday.setDate(pickedDate.getDate() + (6 - pickedDate.getDay()));
            let endMonth = new Date(pickedDate);
            endMonth.setMonth(pickedDate.getMonth() + 1); //Add a month
            endMonth.setDate(0); // to select last day of previous month.
            let endDate = Math.min(endMonth, endSaturday);

            startDate = new Date(startDate);
            endDate = new Date(endDate);

            startDate =
                (startDate.getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                startDate
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                startDate.getFullYear();

            endDate =
                (endDate.getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                endDate
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                endDate.getFullYear();

            setState({ selection: { name: 'This Week', label: startDate + ' - ' + endDate } });
        }
    }
}

function setDatesPicker() {
    let dates = state.value;
    if (dates) {
        if (dates.length > 1) {
            startDate =
                (dates[0].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[0]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[0].getFullYear();
            endDate =
                (dates[1].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[1]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[1].getFullYear();
            rangeDate = startDate + ' - ' + endDate;
            setState({ selection: { name: 'Custom', label: rangeDate } });
        } else {
            rangeDate =
                (dates[0].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[0]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[0].getFullYear();
            setState({ selection: { name: 'Custom', label: rangeDate } });
        }
    }
    setState({ isOpen: false });
}

const containerStyles = {
    width: '200px',
};

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader src="images/user/user3.jpg">
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                value={state.selection}
                style={containerStyles}
                placeholder="Select Date"
                onChange={value => setDates(value)}
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
        value={getDates(state.value)}
        selectionType={state.selectionType}
        onChange={value => setState({ value })}
        onRequestClose={() => setDatesPicker()}
    />
</div>;
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
    background-color: ${props => props.theme.rainbow.palette.background.main};
    box-shadow: 0 0 5px ${props => props.theme.rainbow.palette.text.header};
`;

const Column = styled.div`
    min-width: 30%;
    padding: 0.9rem;
`;

const Vl = styled.div`
    margin: 1rem 0;
    border-left: 2px solid ${props => props.theme.rainbow.palette.text.header};
    height: 50px;
`;

const Title = styled.h4`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 1rem;
    margin: 0 0.5rem 0 1rem;
    font-weight: 900;
`;

const Features = styled.p`
    color: ${props => props.theme.rainbow.palette.text.title};
    font-size: 1rem;
    margin: 0 0.5rem 0 1rem;
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

function getDate(value, selectionType) {
    if (selectionType === 'single' && Array.isArray(value)) return value[0];
    return value;
}

const setDates = value => {
    let dates = getDate(state.value);
    if (dates) {
        if (dates.length > 1) {
            startDate =
                (dates[0].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[0]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[0].getFullYear();
            endDate =
                (dates[1].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[1]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[1].getFullYear();
            rangeDate = startDate + ' - ' + endDate;
            setState({ dates: rangeDate });
        } else {
            rangeDate =
                (dates[0].getMonth() + 1).toString().padStart(2, '0') +
                '/' +
                dates[0]
                    .getDate()
                    .toString()
                    .padStart(2, '0') +
                '/' +
                dates[0].getFullYear();
            setState({ dates: rangeDate });
        }
    }
    setState({ isOpen: false });
};

<div className="rainbow-p-around_large">
    <Row className="rainbow-border-radius_oval">
        <div className="rainbow-flex rainbow-justify_space-around">
            <Column className="rainbow-flex rainbow-justify_spread">
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
            <Vl />
            <Column className="rainbow-flex rainbow-justify_spread">
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
            <Vl />
            <Column className="rainbow-flex rainbow-justify_spread">
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
        </div>
    </Row>
    <DatePickerModal
        title={state.title}
        isOpen={state.isOpen}
        value={getDate(state.value)}
        variant="double"
        selectionType={state.selectionType}
        onChange={value => setState({ value })}
        onRequestClose={() => setDates()}
    />
</div>;
```
