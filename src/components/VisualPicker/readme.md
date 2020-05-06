##### VisualPicker with one option selected

```js
import React from 'react';
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;

class SimpleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'option-1',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-1"
                label="Select Option"
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <SimpleVisualPicker />
</div>
```

##### VisualPicker with multiple option selected

```js
import React from 'react';
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;

class MultipleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['option-2'],
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-3"
                label="Select Options"
                multiple
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <MultipleVisualPicker />
</div>
```

##### VisualPicker with footer

```js
import React from 'react';
import {
    VisualPicker,
    VisualPickerOption,
    VisualPickerOptionFooter,
} from 'react-rainbow-components';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledTitle = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 36px;
    font-weight: 200;
    color: ${props => props.text.main};
`;

const StyledDescription = styled.h3.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.text.label};
`;

class SimpleVisualPickerWithFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-5"
                label="Our Rainbow Options"
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption
                    name="option-1"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Complete service for teams of any size."
                        />
                    }
                >
                    <StyledTitle>$30</StyledTitle>
                    <StyledDescription>user/month</StyledDescription>
                </VisualPickerOption>
                <VisualPickerOption
                    name="option-2"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Everything you need to take support."
                        />
                    }
                >
                    <StyledTitle>$60</StyledTitle>
                    <StyledDescription>user/month</StyledDescription>
                </VisualPickerOption>
                <VisualPickerOption
                    name="option-3"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Complete support with customization."
                        />
                    }
                >
                    <StyledTitle>$90</StyledTitle>
                    <StyledDescription>user/month</StyledDescription>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        Select plan
    </StyledHeader>
    <SimpleVisualPickerWithFooter />
</div>
```

##### VisualPicker small

```js
import React from 'react';
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 12px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;

class SimpleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-7"
                label="Select Option"
                value={this.state.value}
                onChange={this.handleOnChange}
                size="small"
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <SimpleVisualPicker />
</div>
```

##### VisualPicker large

```js
import React from 'react';
import { VisualPicker, VisualPickerOption } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledHeader = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 24px;
    font-weight: 300;
    color: ${props => props.text.main};
`;

const StyledLabel = styled.h2.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-size: 15px;
    font-weight: 300;
    margin-top:6px
    color: ${props => props.text.label};
`;

class SimpleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-9"
                label="Select Option"
                value={this.state.value}
                onChange={this.handleOnChange}
                size="large"
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <StyledLabel>Design</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <StyledLabel>Photographer</StyledLabel>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <StyledLabel>Programmer</StyledLabel>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <StyledHeader className="rainbow-m-bottom_medium">
        What are you doing?
    </StyledHeader>
    <SimpleVisualPicker />
</div>
```
