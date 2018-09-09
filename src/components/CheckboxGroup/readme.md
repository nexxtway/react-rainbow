##### Checkbox Group basic
    const options = [
        { value: 'admin', label: 'Admin', disabled: false },
        { value: 'user', label: 'User', disabled: false },
        { value: 'nobody', label: 'Anonymus', disabled: true },
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
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <CheckboxGroup
                        label="checkbox group"
                        options={options}
                        value={values}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
    }

    <CheckboxGroupTry />

##### Checkbox Group active
    const options = [
        { value: 'admin', label: 'Admin', disabled: false },
        { value: 'user', label: 'User', disabled: false },
        { value: 'nobody', label: 'Anonymus', disabled: true },
    ];

    class CheckboxGroupTry extends React.Component {
        constructor(props) {
            super(props);
            this.state = { values: ['admin', 'user'] };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(values) {
            this.setState({ values });
        }

        render() {
            const { values } = this.state;
            return (
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <CheckboxGroup
                        label="checkbox group"
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
        { value: 'admin', label: 'Admin', disabled: true },
        { value: 'user', label: 'User', disabled: true },
        { value: 'nobody', label: 'Anonymus', disabled: true },
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
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <CheckboxGroup
                        label="checkbox group"
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
        { value: 'admin', label: 'Admin', disabled: false },
        { value: 'user', label: 'User', disabled: false },
        { value: 'nobody', label: 'Anonymus', disabled: true },
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
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <CheckboxGroup
                        label="checkbox group"
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
        { value: 'admin', label: 'Admin', disabled: false },
        { value: 'user', label: 'User', disabled: false },
        { value: 'nobody', label: 'Anonymus', disabled: true },
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
                <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                    <CheckboxGroup
                        label="checkbox group"
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
