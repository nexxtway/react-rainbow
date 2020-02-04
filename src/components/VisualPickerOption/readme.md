##### VisualPickerOption with one option selected:

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

const textStyles = {
    fontSize: 15,
    color: '#a4a7b5',
    marginTop: 8,
    fontWeight: 300,
};

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
                label="Select Option"
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <h2 style={textStyles}>Design</h2>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <h2 style={textStyles}>Photographer</h2>
                </VisualPickerOption>
                <VisualPickerOption name="option-3">
                    <CodeIcon />
                    <h2 style={textStyles}>Programmer</h2>
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

##### VisualPickerOption with option disabled:

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

const textStyles = {
    fontSize: 15,
    color: '#a4a7b5',
    marginTop: 8,
    fontWeight: 300,
};

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
                label="Select Option"
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption name="option-1">
                    <DesignIcon />
                    <h2 style={textStyles}>Design</h2>
                </VisualPickerOption>
                <VisualPickerOption name="option-2">
                    <PhotographerIcon />
                    <h2 style={textStyles}>Photographer</h2>
                </VisualPickerOption>
                <VisualPickerOption name="option-3" disabled>
                    <CodeIcon />
                    <h2 style={textStyles}>Programmer</h2>
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

##### VisualPickerOption with footer:

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
