##### progressCircular base in action

    class ProgressCircularInAction extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value : 0};
            this.increment = this.increment.bind(this);
        }

        componentDidMount() {
            this.increment();
        }

        increment() {
            const { value } = this.state;
            if (value === 100) {
                this.setState({ value: 0 });
            } else {
                this.setState({ value: value + 1 });
            }
            setTimeout(this.increment, 100);
        }

        render() {
            const { value } = this.state;
            return (
                <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
                    <ProgressCircular value={value} />
                </div>
            );
        }
    }

    <ProgressCircularInAction />

##### progressCircular success

    const inputContainerStyles = {
        width: '50%',
    };
    initialState = { percent: 0 };
    const { Field, reduxForm } = require('redux-form');

    function Form({ handleSubmit, onSubmit }) {
        return (
            <form className="rainbow-align_right" noValidate onSubmit={handleSubmit(onSubmit)}>
                <Field
                    component={Input}
                    type="number"
                    name="percent"
                    placeholder="0 to 100"
                    label="Percent Value" />
                <Button label="Set" type="submit" />
            </form>
        );
    }

    const ProgressCircularForm = reduxForm({
        form: 'progress-circular-form',
        touchOnBlur: false,
    })(Form);

    <div className="rainbow-align-content_center rainbow-m-around_xx-large">
        <div className="rainbow-flex rainbow-p-bottom_medium">
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <ProgressCircular value={state.percent} variant="success" />
            </div>
            <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                <ProgressCircularForm onSubmit={values => setState({ percent: values.percent })} />
                <Button label="Set random percent" onClick={() => setState({ percent: Math.ceil(Math.random() * 100) })} />
            </div>
        </div>
    </div>

##### progressCircular warning

    <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
        <ProgressCircular value={60} variant="warning" />
    </div>

##### progressCircular error

    <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
        <ProgressCircular value={60} variant="error" />
    </div>
