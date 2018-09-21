##### select basic
    const options = [
        { value: 'option 1', label: 'Option 1' },
        { value: 'option 2', label: 'Option 2' },
        { value: 'option 3', label: 'Option 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="Select Label" options={options} id="select-1"/>
    </div>


##### select required
    const options = [
        { value: 'option 1', label: 'Option required 1' },
        { value: 'option 2', label: 'Option required 2' },
        { value: 'option 3', label: 'Option required 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="Select Label" required options={options} />
    </div>


##### select disabled
    const options = [
        { value: 'option 1', label: 'Option disabled 1' },
        { value: 'option 2', label: 'Option disabled 2' },
        { value: 'option 3', label: 'Option disabled 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select label="Select Label" disabled options={options} />
    </div>


##### select with error
    const options = [
        { value: 'option 1', label: 'Option with error 1' },
        { value: 'option 2', label: 'Option with error 2' },
        { value: 'option 3', label: 'Option with error 3' },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Select 
            label="Select Label"
            required error="this field is required"
            options={options} />
    </div>


##### select controlled example
    const options = [
        { value: 'option 1', label: 'Option controlled 1', disabled: false },
        { value: 'option 2', label: 'Option controlled 2', disabled: false },
        { value: 'option 3', label: 'Option controlled 3', disabled: true },
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
                    label="Select Label"
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
