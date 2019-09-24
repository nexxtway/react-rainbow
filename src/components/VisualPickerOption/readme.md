##### VisualPickerOption with one option selected:

```js
const titleStyles = {
    fontSize: 24,
    color: '#061c3f',
    fontWeight: 300,
};

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
    <h1 style={titleStyles} className="rainbow-m-bottom_medium">
        What are you doing?
    </h1>
    <SimpleVisualPicker />
</div>;
```

##### VisualPickerOption with option disabled:

```js
const titleStyles = {
    fontSize: 24,
    color: '#061c3f',
    fontWeight: 300,
};

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
    <h1 style={titleStyles} className="rainbow-m-bottom_medium">
        What are you doing?
    </h1>
    <SimpleVisualPicker />
</div>;
```

##### VisualPickerOption with footer:

```js
const headerStyles = {
    fontSize: 24,
    color: '#061c3f',
    fontWeight: 300,
};

const titleStyles = {
    fontSize: 36,
    color: '#061c3f',
    fontWeight: 200,
};

const descriptionStyles = {
    fontSize: 14,
    color: '#a4a7b5',
    fontWeight: 300,
};

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
                    <h2 style={titleStyles}>$30</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
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
                    <h2 style={titleStyles}>$60</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
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
                    <h2 style={titleStyles}>$90</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

<div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
    <h1 style={headerStyles} className="rainbow-m-bottom_medium">
        Select plan
    </h1>
    <SimpleVisualPickerWithFooter />
</div>;
```
