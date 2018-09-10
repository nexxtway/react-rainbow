##### Checkbox Group basic
    const options = [
        { value: 'Checkbox One', label: 'Checkbox One', disabled: false },
        { value: 'Checkbox Two', label: 'Checkbox Two', disabled: false },
        { value: 'Checkbox Three', label: 'Checkbox Three', disabled: false },
    ];

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
                <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                    <CheckboxGroup
                        label="Checkbox Group Label"
                        options={options}
                        value={values}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
    }

    <CheckboxGroupTry />


##### Checkbox Group disabled
    const options = [
        { value: 'Checkbox One disabled', label: 'Checkbox One disabled', disabled: true },
        { value: 'Checkbox Two disabled', label: 'Checkbox Two disabled', disabled: true },
        { value: 'Checkbox Three disabled', label: 'Checkbox Three disabled', disabled: true },
    ];

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
                <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                    <CheckboxGroup
                        label="Checkbox Group Label"
                        options={options}
                        value={values}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
    }

    <CheckboxGroupTry />


##### Checkbox Group required
    const options = [
        { value: 'Checkbox One', label: 'Checkbox One', disabled: false },
        { value: 'Checkbox Two', label: 'Checkbox Two', disabled: false },
        { value: 'Checkbox Three', label: 'Checkbox Three', disabled: false },
    ];

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
                <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                    <CheckboxGroup
                        label="Checkbox Group Label"
                        required
                        options={options}
                        value={values}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
    }

    <CheckboxGroupTry />

##### Checkbox Group error
    const options = [
        { value: 'Checkbox One', label: 'Checkbox One', disabled: false },
        { value: 'Checkbox Two', label: 'Checkbox Two', disabled: false },
        { value: 'Checkbox Three', label: 'Checkbox Three', disabled: false },
    ];

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
                <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
                    <CheckboxGroup
                        label="Checkbox Group Label"
                        required
                        error="this field is required"
                        options={options}
                        value={values}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
    }

    <CheckboxGroupTry />
