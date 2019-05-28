##### radiobuttongroup base

    const options = [
        { value: 'radioOne', label: 'Radio One' },
        { value: 'radioTwo', label: 'Radio Two' },
        { value: 'radioThree', label: 'Radio Three' },
    ]

    class SimpleRadioButtonGroup extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: undefined,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: event.target.value });
        }

        render() {
            return (
                <RadioButtonGroup
                    id="radio-button-group-component-1"
                    options={options}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    label="RadioButtonGroup Label" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
        <SimpleRadioButtonGroup />
    </div>

##### radiobuttongroup disabled

    const options = [
        { value: 'radioOne', label: 'Radio One', disabled: true },
        { value: 'radioTwo', label: 'Radio Two', disabled: true },
        { value: 'radioThree', label: 'Radio Three', disabled: true },
    ]

    class DisabledRadioButtonGroup extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 'user',
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: event.target.value });
        }

        render() {
            return (
                <RadioButtonGroup
                    options={options}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    label="RadioButtonGroup Label" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
        <DisabledRadioButtonGroup />
    </div>

##### radiobuttongroup required

    const options = [
       { value: 'radioOne', label: 'Radio One' },
        { value: 'radioTwo', label: 'Radio Two' },
        { value: 'radioThree', label: 'Radio Three' },
    ]

    class RequiredRadioButtonGroup extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: undefined,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: event.target.value });
        }

        render() {
            return (
                <RadioButtonGroup
                    options={options}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    label="RadioButtonGroup Label"
                    required />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
        <RequiredRadioButtonGroup />
    </div>

##### radiobutton group error

    const options = [
        { value: 'radioOne', label: 'Radio One' },
        { value: 'radioTwo', label: 'Radio Two' },
        { value: 'radioThree', label: 'Radio Three' },
    ]

    class ErrorRadioButtonGroup extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 'anonymous',
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: event.target.value });
        }

        render() {
            return (
                <RadioButtonGroup
                    options={options}
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    label="RadioButtonGroup Label"
                    error="This field is required" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_xx-large">
        <ErrorRadioButtonGroup />
    </div>
