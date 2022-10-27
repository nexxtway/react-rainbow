##### ButtonGroupPicker base

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';

class ButtonGroupPickerTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker
                    id="button-group-picker-component-1"
                    label="Select view type"
                    value={value}
                    onChange={this.handleOnChange}
                    name="filter"
                    size="medium"
                    bottomHelpText="Select one option"
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

    <ButtonGroupPickerTry />;

```

##### ButtonGroupPicker multiple options selected

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faStrikethrough } from '@fortawesome/free-solid-svg-icons';

class ButtonGroupPickerTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [
            'bold',
            'italic',
        ] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker
                    id="button-group-picker-component-3"
                    className="rainbow-m-around_medium"
                    value={values}
                    onChange={this.handleOnChange}
                    name="text-options-multiple"
                    multiple
                >
                    <ButtonOption label={<FontAwesomeIcon icon={faBold} />} name="bold" />
                    <ButtonOption label={<FontAwesomeIcon icon={faItalic} />} name="italic" />
                    <ButtonOption label={<FontAwesomeIcon icon={faUnderline} />} name="underline" />
                    <ButtonOption label={<FontAwesomeIcon icon={faStrikethrough} />} name="strike" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

    <ButtonGroupPickerTry />;

```

##### ButtonGroupPicker with option disabled

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

class ButtonGroupPickerTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker
                    id="button-group-picker-component-5"
                    className="rainbow-m-around_medium"
                    value={value}
                    onChange={this.handleOnChange}
                    name="text-options"
                >
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignLeft} />} name="left" disabled />
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignCenter} />} name="center" />
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignRight} />} name="right" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

    <ButtonGroupPickerTry />;

```

##### ButtonGroupPicker with error

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';

class ButtonGroupPickerTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker
                    label="Select view type"
                    value={value}
                    onChange={this.handleOnChange}
                    name="date-filter"
                    error="This field is required"
                    required
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

    <ButtonGroupPickerTry />;

```

##### ButtonGroupPicker with shaded variant

```js
import React, { useState } from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';

const ButtonGroupPickerTry = () => {
    const [value, setValue] = useState('');

    return (
        <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
            <ButtonGroupPicker
                label="Select view type"
                value={value}
                onChange={setValue}
                name="filter"
                size="medium"
                bottomHelpText="Select one option"
                variant="shaded"
            >
                <ButtonOption label="Month" name="month" />
                <ButtonOption label="Week" name="week" />
                <ButtonOption label="Day" name="day" />
            </ButtonGroupPicker>
        </div>
    );
}

    <ButtonGroupPickerTry />;

```

##### ButtonGroupPicker with different border radius

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';

class ButtonGroupPickerTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-m-bottom_medium">
                <ButtonGroupPicker
                    id="button-group-picker-component-1"
                    label="Button Group Picker with border radius square"
                    value={value}
                    onChange={this.handleOnChange}
                    name="filter"
                    size="medium"
                    bottomHelpText="Select one option"
                    className="rainbow-m-around_medium"
                    borderRadius="square"
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
                <ButtonGroupPicker
                    id="button-group-picker-component-1"
                    label="Select view type"
                    value={value}
                    onChange={this.handleOnChange}
                    name="filter"
                    size="medium"
                    bottomHelpText="Select one option"
                    className="rainbow-m-around_medium"
                    borderRadius="semi-rounded"
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
                <ButtonGroupPicker
                    id="button-group-picker-component-1"
                    label="Select view type"
                    value={value}
                    onChange={this.handleOnChange}
                    name="filter"
                    size="medium"
                    bottomHelpText="Select one option"
                    borderRadius="rounded"
                >
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

    <ButtonGroupPickerTry />;

```