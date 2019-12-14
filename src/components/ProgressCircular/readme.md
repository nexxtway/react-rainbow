##### ProgressCircular

```js
import React from 'react';
import { Card, ProgressCircular } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const IconStyles = {
    width: 24,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function ActiveUsersCard({ title, variant, color }) {
    const [percent, setPercent] = React.useState(60);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setPercent(Math.ceil(Math.random() * 100));
        }, 10000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Card className="rainbow-m-horizontal_large rainbow-m-bottom_large rainbow-p-around_small">
            <h1 className="rainbow-font-size-heading_medium">{title}</h1>
            <h2 className="rainbow-font-size-heading_small rainbow-color_gray-3">Active users</h2>
            <div className="rainbow-p-around_medium">
                <ProgressCircular variant={variant} value={percent} />
            </div>
            <div className="rainbow-flex rainbow_vertical-stretch">
                <span style={IconStyles} className={`rainbow-color_${color}`}>
                    <FontAwesomeIcon icon={faCircle} />
                </span>
                <h3 className="rainbow-font-size_small">Active Now</h3>
            </div>
        </Card>
    );
}

<div className="rainbow-m-around_xx-large rainbow-flex_column rainbow-align-content_center">
    <h1 className="rainbow-font-size-heading_large rainbow-p-bottom_small">
        Social Network Activity
    </h1>
    <div className="rainbow-flex rainbow-flex_wrap">
        <ActiveUsersCard title="snapchat" variant="warning" color="yellow" />
        <ActiveUsersCard title="twitter" color="brand" />
        <ActiveUsersCard title="google" variant="error" color="error" />
    </div>
</div>
```

##### ProgressCircular variants

```js
import React from 'react';
import { ProgressCircular } from 'react-rainbow-components';

<div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
    <div className="rainbow-p-around_large rainbow-align-content_center rainbow-flex_column">
        <ProgressCircular value={24} />
        <h1 className="rainbow-font-size-heading_small rainbow-color_gray-3">brand</h1>
    </div>
    <div className="rainbow-p-around_large rainbow-align-content_center rainbow-flex_column">
        <ProgressCircular value={45} variant="success" />
        <h1 className="rainbow-font-size-heading_small rainbow-color_gray-3">success</h1>
    </div>
    <div className="rainbow-p-around_large rainbow-align-content_center rainbow-flex_column">
        <ProgressCircular value={60} variant="warning" />
        <h1 className="rainbow-font-size-heading_small rainbow-color_gray-3">warning</h1>
    </div>
    <div className="rainbow-p-around_large rainbow-align-content_center rainbow-flex_column">
        <ProgressCircular value={82} variant="error" />
        <h1 className="rainbow-font-size-heading_small rainbow-color_gray-3">error</h1>
    </div>
</div>
```
