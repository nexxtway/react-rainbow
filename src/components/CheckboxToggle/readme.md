##### checkbox toggle base

    class SimpleCheckboxToggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: false,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: !this.state.value });
        }

        render() {
            return (
                <CheckboxToggle
                    id="checkbox-toggle-component-1"
                    label="Toggle Label"
                    value={this.state.value}
                    onChange={this.handleOnChange} />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <SimpleCheckboxToggle />
    </div>

##### checkbox toggle checked

    class CheckedCheckboxToggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: true,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: !this.state.value });
        }

        render() {
            return (
                <CheckboxToggle
                    label="Toggle Label"
                    value={this.state.value}
                    onChange={this.handleOnChange} />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <CheckedCheckboxToggle />
    </div>

##### checkbox toggle disabled

    class DisabledCheckboxToggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: false,
            };
            this.handleOnChange = this.handleOnChange.bind(this);
        }

        handleOnChange(event) {
            return this.setState({ value: !this.state.value });
        }

        render() {
            return (
                <CheckboxToggle
                    label="Toggle Label"
                    value={this.state.value}
                    onChange={this.handleOnChange}
                    disabled />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-left_x-large">
        <DisabledCheckboxToggle />
    </div>
