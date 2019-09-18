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
            setTimeout(this.increment, 50);
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

    initialState = { percent: 60 };

    <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-flex_column">
        <Button label="Set random percent" onClick={() => setState({ percent: Math.ceil(Math.random() * 100) })} />
        <ProgressCircular value={state.percent} variant="success" />
    </div>
