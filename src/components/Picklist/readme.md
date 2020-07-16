##### Picklist base

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 3', label: 'Central Park' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-1"
                style={containerStyles}
                onChange={(value) => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
            >
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 1" label="Experimental Building" />
                <Option name="option 2" label="Empire State" />
                <Option name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist with multiple options

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: null };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user1.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-3"
                style={containerStyles}
                placeholder="Choose Building"
                onChange={(value) => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
                enableSearch
            >
                <Option name="option 1" label="All Buildings" icon={<DashboardIcon />} />
                <Option name="option 2" label="New Building" icon={<AddFilledIcon />} />
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 3" label="Experimental" icon={<BuildingIcon />} />
                <Option name="option 4" label="Bennet Towers" icon={<BuildingIcon />} />
                <Option name="option 5" label="Empire State" icon={<BuildingIcon />} />
                <Option name="option 6" label="Central Park" icon={<BuildingIcon />} />
                <Option name="option 7" label="Chrysler" icon={<BuildingIcon />} />
                <Option name="option 8" label="Plaza" icon={<BuildingIcon />} />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist disabled

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '180px',
};

initialState = { value: { name: 'option 1', label: 'All Buildings' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                disabled
                value={state.value}
                label="Select Building"
                hideLabel
                style={containerStyles}
            >
                <Option name="option 1" label="Experimental Building" />
                <Option name="option 2" label="Empire State" />
                <Option name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist with redux-form

```js
import React from 'react';
import { Picklist, Option, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';

const containerStyles = {
    width: '140px',
};

function Form({ handleSubmit, onSubmit }) {
    return (
        <form
            className="rainbow-flex rainbow-align_right rainbow-flex_wrap"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Field
                style={containerStyles}
                component={Picklist}
                name="option"
                placeholder="Choose"
                label="Select Building"
                hideLabel
            >
                <Option name="option 1" label="All Buildings" />
                <Option name="option 2" label="New Building" />
                <Option name="header 2" label="Your Buildings" variant="header" />
                <Option name="option 3" label="Experimental" />
                <Option name="option 4" label="Empire State" />
            </Field>
            <ButtonIcon
                variant="border"
                icon={<FontAwesomeIcon icon={faUpload} />}
                className="rainbow-m-left_small"
                type="submit"
            />
        </form>
    );
}

const PicklistForm = reduxForm({
    form: 'picklist-form',
    touchOnBlur: false,
})(Form);

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <PicklistForm onSubmit={(values) => console.log(values)} />
    </GlobalHeader>
</div>;
```

##### Picklist with Option changed dynamically

```js
import React from 'react';
import { Picklist, Option, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 3', label: 'Central Park' } };

class PicklistExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBuildingsAdded: false,
            value: initialState.value,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    addNewBuildings() {
        const { isBuildingsAdded } = this.state;
        this.setState({ isBuildingsAdded: !isBuildingsAdded });
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    }

    renderNewBuildings() {
        const { isBuildingsAdded } = this.state;
        if (isBuildingsAdded) {
            return <Option name="option 4" label="One World Trade Center" />;
        }
        return null;
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                <GlobalHeader
                    className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
                    src="images/user/user3.jpg"
                >
                    <div className="rainbow-flex rainbow-align_right">
                        <Picklist
                            id="picklist-9"
                            style={containerStyles}
                            onChange={this.handleChange}
                            value={this.state.value}
                            label="Select Building"
                            hideLabel
                        >
                            <Option name="option 1" label="Experimental Building" />
                            {this.renderNewBuildings()}
                            <Option name="option 2" label="Empire State" />
                            <Option name="option 3" label="Central Park" />
                        </Picklist>
                    </div>
                    <ButtonIcon
                        id="button-icon_add-new-buildings"
                        className="rainbow-m-left_small"
                        onClick={() => this.addNewBuildings()}
                        variant="border"
                        icon={<FontAwesomeIcon icon={faDownload} />}
                    />
                </GlobalHeader>
            </div>
        );
    }
}

<PicklistExample />;
```

##### Picklist error

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

initialState = { value: { name: 'option 3', label: 'Central Park' } };

<Picklist
    id="picklist-11"
    style={containerStyles}
    onChange={(value) => setState({ value })}
    value={state.value}
    required
    error="This Field is Required"
    label="Select Building"
    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
>
    <Option name="header" label="Your Buildings" variant="header" />
    <Option name="option 1" label="Experimental Building" />
    <Option name="option 2" label="Empire State" />
    <Option name="option 3" label="Central Park" />
</Picklist>;
```

##### Picklist shaded with neutral GlobalHeader

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 3', label: 'Central Park' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        variant="neutral"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-13"
                style={containerStyles}
                onChange={(value) => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
                variant="shaded"
            >
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 1" label="Experimental Building" />
                <Option name="option 2" label="Empire State" />
                <Option name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```

##### Picklist with Modal

```js
import React from 'react';
import { Picklist, Option, Modal, Input, Button, GoogleAddressLookup } from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

initialState = { isOpen: false, selection: { name: '', label: '' }, googleAddressValue: null, buildingNameValue: '' };

const StyledInput = styled(Input)`
    margin-bottom: 90px;
    margin-top: 32px;
`;

const containerStyles = {
    width: '220px'
};

function handlePicklistChange(value) {
    if (value.name === 'option 1') {
        setState({
            isOpen: true,
        });
    } else {
        setState({ selection: value });
    }
}

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user3.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
        variant="neutral">
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                style={containerStyles}
                onChange={handlePicklistChange}
                value={state.selection}
                placeholder="Select your building"
                variant="shaded"
            >
                <Option name="option 1" label="New Building" icon={<AddFilledIcon />} />
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 2" label="Central Park Tower" />
                <Option name="option 3" label="Empire State" />
                <Option name="option 5" label="Panorama Tower" />
                <Option name="option 4" label="Chrysler" />
                <Option name="option 6" label="Bennet Towers" />
            </Picklist>
        </div>
    </GlobalHeader>
    <Modal
        title="New Building"
        isOpen={state.isOpen}
        onRequestClose={() => setState({ isOpen: false })}
        footer={
            <div className="rainbow-flex rainbow-justify_end">
                <Button
                    form="redux-form-id"
                    className="rainbow-m-right_large"
                    label="Cancel"
                    variant="neutral"
                    onClick={() => setState({ isOpen: false })}
                />
                <Button
                    form="redux-form-id"
                    label="Save"
                    variant="brand"
                    type="submit"
                />
            </div>
        }
    >
        <div className="rainbow-p-horizontal_small">
            <GoogleAddressLookup
                id="gaddresslookup-1"
                label="Building Location"
                required
                placeholder="Enter the building Location"
                apiKey={LIBRARY_GOOGLE_MAPS_APIKEY}
                size="small"
                value={state.googleAddressValue}
                onChange={value => setState({ googleAddressValue: value })}
            />
            <StyledInput
                name="subject"
                required
                label="Building Name"
                placeholder="Enter Building name"
                icon={<BuildingIcon />}
                value={state.buildingNameValue}
                onChange={value => setState({ buildingNameValue: value })}
            />
        </div>
    </Modal>
</div>
=======
##### Picklist readOnly

```js
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
    width: '200px',
};

initialState = { value: { name: 'option 2', label: 'Empire State' } };

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader
        src="images/user/user2.jpg"
        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
    >
        <div className="rainbow-flex rainbow-align_right">
            <Picklist
                id="picklist-15"
                style={containerStyles}
                onChange={(value) => setState({ value })}
                value={state.value}
                label="Select Building"
                hideLabel
                readOnly
            >
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 1" label="Experimental Building" />
                <Option name="option 2" label="Empire State" />
                <Option name="option 3" label="Central Park" />
            </Picklist>
        </div>
    </GlobalHeader>
</div>;
```
