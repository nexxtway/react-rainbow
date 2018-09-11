##### select basic
    const options = [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
        { value: 'option 3', label: 'option 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="test" options={options} />
    </div>

##### select required
    const options = [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
        { value: 'option 3', label: 'option 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="test" required options={options} />
    </div>

##### select disabled
    const options = [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
        { value: 'option 3', label: 'option 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="test" disabled options={options} />
    </div>

##### select with error
    const options = [
        { value: 'option 1', label: 'option 1' },
        { value: 'option 2', label: 'option 2' },
        { value: 'option 3', label: 'option 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="test" required error="this field is required" options={options} />
    </div>

##### select controlled example
    const options = [
        { value: 'option 1', label: 'option 1', disabled: false },
        { value: 'option 2', label: 'option 2', disabled: false },
        { value: 'option 3', label: 'option 3', disabled: true },
    ];
    class ControlledSelect extends React.Component {
        constructor(props) {
            super(props);
            this.state ={ value: undefined };
            this.handleOnSelect = this.handleOnSelect.bind(this);
        }

        handleOnSelect(event) {
            this.setState({ value: event.target.value });
        }

        render() {
            const { value } = this.state;
            return (
                <Select
                    label="test"
                    required
                    options={options}
                    value={value}
                    onChange={this.handleOnSelect} />
            );
        }
    }

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <ControlledSelect />
    </div>
