##### Base Slider

    class SliderExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 50,
            };
            this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            this.setState({ value: e.target.value });
        }

        render() {
            const { value } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-vertical_xx-large">
                        <div className="rainbow-position_relative rainbow-m-around_xx-large rainbow-p-around_xx-large">
                            <Slider label="Slider label" value={value} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <SliderExample />

##### Slider with min, max and step properties

    class SliderExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 200,
            };
            this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            this.setState({ value: e.target.value });
        }

        render() {
            const { value } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-vertical_xx-large">
                        <div className="rainbow-position_relative rainbow-m-around_xx-large rainbow-p-around_xx-large">
                            <Slider label="Slider label" min="100" max="400" step="50" value={value} onChange={this.onChange} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <SliderExample />

##### Slider with error

    class SliderExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 50,
            };
            this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            this.setState({ value: e.target.value });
        }

        render() {
            const { value } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-vertical_xx-large">
                        <div className="rainbow-position_relative rainbow-m-around_xx-large rainbow-p-around_xx-large">
                            <Slider label="Slider label" value={value} onChange={this.onChange} error="This field is required" />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <SliderExample />

##### Slider disabled

    class SliderExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 50,
            };
            this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            this.setState({ value: e.target.value });
        }

        render() {
            const { value } = this.state;
            return (
                <div>
                    <GlobalHeader src="images/user/user3.jpg" />
                    <div className="rainbow-p-vertical_xx-large">
                        <div className="rainbow-position_relative rainbow-m-around_xx-large rainbow-p-around_xx-large">
                            <Slider label="Slider label" value={value} onChange={this.onChange} disabled />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <SliderExample />
