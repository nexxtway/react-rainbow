##### ButtonGroupPicker base

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker onChange={this.handleOnChange} value={values} name="filter" size="medium" label="Select view type" bottomHelpText="Select one option">
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

<CheckboxGroupTry />;

```

##### ButtonGroupPicker multiple options selected

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faStrikethrough } from '@fortawesome/free-solid-svg-icons';

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [
            'bold',
            'italic',
        ]};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker className="rainbow-m-around_medium" multiple onChange={this.handleOnChange} value={values} name="text-options-multiple">
                    <ButtonOption label={<FontAwesomeIcon icon={faBold} />} name="bold" />
                    <ButtonOption label={<FontAwesomeIcon icon={faItalic} />} name="italic" />
                    <ButtonOption label={<FontAwesomeIcon icon={faUnderline} />} name="underline" />
                    <ButtonOption label={<FontAwesomeIcon icon={faStrikethrough} />} name="strike" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

<CheckboxGroupTry />;

```

##### ButtonGroupPicker with option disabled

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker className="rainbow-m-around_medium" onChange={this.handleOnChange} value={values} name="text-options-multiple">
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignLeft} />} name="left" disabled />
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignCenter} />} name="center" />
                    <ButtonOption label={<FontAwesomeIcon icon={faAlignRight} />} name="right" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

<CheckboxGroupTry />;

```

##### ButtonGroupPicker with error

```js
import React from 'react';
import { ButtonGroupPicker, ButtonOption } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faAlignCenter, faAlignRight } from '@fortawesome/free-solid-svg-icons';

class CheckboxGroupTry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(values) {
        this.setState({ values });
    }

    render() {
        const { values } = this.state;
        return (
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroupPicker onChange={this.handleOnChange} value={values} name="text-options-multiple" label="Select view type" error="This field is required">
                    <ButtonOption label="Month" name="month" />
                    <ButtonOption label="Week" name="week" />
                    <ButtonOption label="Day" name="day" />
                </ButtonGroupPicker>
            </div>
        );
    }
}

<CheckboxGroupTry />;

```