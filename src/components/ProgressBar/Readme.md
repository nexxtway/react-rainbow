##### progressBar base

    class GrowingProgressBar extends React.Component {
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
                this.setState({ value: value + 2 });
            }
            setTimeout(this.increment, 500);
        }

        render() {
            const { value } = this.state;
            return (
                <div className="slds-p-around_x-large" >
                    <ProgressBar value={value} />
                </div>
            );
        }
    }

    <GrowingProgressBar />


##### progressBar success

    <div className="slds-p-around_x-large" >
        <ProgressBar value={50} variant="success" />
    </div>


##### descriptive progressBar

    <div className="slds-p-around_x-large" >
        <div className="slds-grid slds-grid_align-spread slds-p-bottom_x-small">
            <span>Einstein Setup Assistant</span>
            <span aria-hidden="true">
              <strong>25% Complete</strong>
            </span>
        </div>
        <ProgressBar value={25} />
    </div>


##### progressBar with size variants

    <div className="slds-p-around_large">
        <div className="slds-p-around_medium">
            <ProgressBar value={25} size="x-small" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: x-small</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={50} size="small" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: small</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={35} size="medium" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: medium</span>
        </div>
        <div className="slds-p-around_medium">
            <ProgressBar value={75} size="large" />
            <span className="slds-grid slds-m-top_x-small slds-text-color_weak">size: large</span>
        </div>
    </div>
