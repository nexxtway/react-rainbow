##### list loading using spinner - base - large

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <div className="rainbow-p-vertical_xx-large">
        <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
            <Spinner size="large" />
        </div>
    </div>
</div>
```

##### full screen loading using spinner - brand - medium

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';

const containerStyles = {
    borderRadius: '0.875rem',
};

<div
    className="rainbow-background-color_white rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large"
    style={containerStyles}
>
    <Spinner variant="brand" size="medium" />
    <h1 className="rainbow-color_brand rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">
        Loading…
    </h1>
</div>
```

##### lazy loading using spinner - neutral - small

```js
import React from 'react';
import { Spinner, Card, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const iconContainerStyles = {
    width: '2rem',
    height: '2rem',
};

const spinner = (
    <div className="rainbow-align-content_center">
        <div className="rainbow-position_relative">
            <Spinner size="small" variant="neutral" />
        </div>
        <h1 className="rainbow-font-size-text_medium rainbow-m-left_large rainbow-color_gray-4">
            Loading…
        </h1>
    </div>
);
<div className="rainbow-p-vertical_large rainbow-p-horizontal_large">
    <Card
        icon={
            <div
                className="rainbow-background-color_brand rainbow-border-radius_circle rainbow-align-content_center"
                style={iconContainerStyles}
            >
                <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
            </div>
        }
        title="Task"
        footer={spinner}
        actions={<Button variant="neutral" label="Add" />}
    >
        <div className="rainbow-p-vertical_xx-large" />
    </Card>
</div>
```

##### full screen loading using spinner - inverse - medium

```js
import React from 'react';
import { Spinner } from 'react-rainbow-components';

const containerStyles = {
    backgroundColor: '#061c3f',
    borderRadius: '0.875rem',
};

const textStyles = {
    color: '#fff',
};

<div
    className="rainbow-background-color_white rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large"
    style={containerStyles}
>
    <Spinner variant="inverse" size="medium" />
    <h1
        className="rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large"
        style={textStyles}
    >
        Loading…
    </h1>
</div>
```
