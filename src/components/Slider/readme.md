##### Slider Base

```js
import React from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

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
                <div
                    className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                    style={containerStyles}
                >
                    <Slider label="Slider label" value={value} onChange={this.onChange} />
                </div>
            </div>
        );
    }
}

<SliderExample />;
```

##### Slider with min, max and step properties

```js
import React from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

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
                <div
                    className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                    style={containerStyles}
                >
                    <Slider
                        label="Slider label"
                        min="100"
                        max="400"
                        step="50"
                        value={value}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}

<SliderExample />;
```

##### Slider with error

```js
import React from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

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
                <div
                    className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                    style={containerStyles}
                >
                    <Slider
                        label="Slider label"
                        value={value}
                        onChange={this.onChange}
                        error="This field is required"
                    />
                </div>
            </div>
        );
    }
}

<SliderExample />;
```

##### Slider disabled

```js
import React from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

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
                <div
                    className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                    style={containerStyles}
                >
                    <Slider label="Slider label" value={value} onChange={this.onChange} disabled />
                </div>
            </div>
        );
    }
}

<SliderExample />;
```
