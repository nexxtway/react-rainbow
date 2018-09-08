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
                    label="Toggle Label"
                    value={this.state.value}
                    onChange={this.handleOnChange} />
            );
        }
    }

    <div className="rainbow-p-vertical_small rainbow-p-horizontal_xx-small rainbow-m-horizontal_xx-small">
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

    <div className="rainbow-p-vertical_small rainbow-p-horizontal_xx-small rainbow-m-horizontal_xx-small">
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

    <div className="rainbow-p-vertical_small rainbow-p-horizontal_xx-small rainbow-m-horizontal_xx-small">
        <DisabledCheckboxToggle />
    </div>