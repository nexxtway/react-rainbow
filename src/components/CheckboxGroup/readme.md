##### CheckboxGroup basic
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
