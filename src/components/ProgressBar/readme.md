##### ProgressBar base in action

```js
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';

class ProgressBarInAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
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
            this.setState({ value: value + 0.5 });
        }
        setTimeout(this.increment, 50);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="rainbow-p-around_x-large">
                <ProgressBar value={value} />
            </div>
        );
    }
}

<ProgressBarInAction />;
```

##### ProgressBar success

```js
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';

<div className="rainbow-p-around_x-large">
    <ProgressBar value={50} variant="success" />
</div>
```

##### descriptive ProgressBar

```js
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';

<div className="rainbow-p-around_x-large">
    <div className="rainbow-align-content_space-between rainbow-p-bottom_x-small">
        <span className="rainbow-font-size-text_medium rainbow-color_gray-4">
            Descriptive ProgressBar
        </span>
        <span aria-hidden="true">
            <strong className="rainbow-font-size-text_medium rainbow-color_brand">
                25% Complete
            </strong>
        </span>
    </div>
    <ProgressBar value={25} />
</div>
```

##### ProgressBar with size variants

```js
import React from 'react';
import { ProgressBar } from 'react-rainbow-components';

<div className="rainbow-p-around_large">
    <div className="rainbow-p-around_medium">
        <ProgressBar value={25} size="x-small" />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">
            size: x-small
        </span>
    </div>
    <div className="rainbow-p-around_medium">
        <ProgressBar value={50} size="small" />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">size: small</span>
    </div>
    <div className="rainbow-p-around_medium">
        <ProgressBar value={35} size="medium" />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">
            size: medium
        </span>
    </div>
    <div className="rainbow-p-around_medium">
        <ProgressBar value={75} size="large" />
        <span className="rainbow-flex rainbow-m-top_x-small rainbow-color_gray-4">size: large</span>
    </div>
</div>
```
