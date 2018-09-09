##### radio group base

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'anonymous', label: 'Anonymous' }
    ]

    class SimpleRadioGroup extends React.Component {
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
                <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_medium">
        <SimpleRadioGroup />
    </div>

##### radio group disabled

    const options = [
        { value: 'admin', label: 'Admin', disabled: true },
        { value: 'user', label: 'User' },
        { value: 'anonymous', label: 'Anonymous' }
    ]

    class DisabledRadioGroup extends React.Component {
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
                <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_medium">
        <DisabledRadioGroup />
    </div>

##### radio group required

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'anonymous', label: 'Anonymous' }
    ]

    class RequiredRadioGroup extends React.Component {
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
                <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
                required />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_medium">
        <RequiredRadioGroup />
    </div>

##### radio group error

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'anonymous', label: 'Anonymous' }
    ]

    class ErrorRadioGroup extends React.Component {
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
                <RadioGroup
                options={options}
                value={this.state.value}
                onChange={this.handleOnChange}
                label="Radio Group Label"
                required
                error="This field is required" />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_medium">
        <ErrorRadioGroup />
    </div>