# The basic PathStep
##### PathStep component cannot be used in isolation. Instead, use it to compose a `Path`.
##### Notice there is a required prop `name` to identify the step within the containing path.

```js

import React from 'react';
import { Path, PathStep } from 'react-rainbow-components';

const BasicPath = () => {
    return (
        <div className="rainbow-p-around_x-large rainbow-align-content_center">
            <Path currentStepName="arrived">
                <PathStep name="scheduled" label="Scheduled" />
                <PathStep name="in-progress" label="InProgress" />
                <PathStep name="arrived" label="Arrived" />
                <PathStep name="delivered" label="Delivered" />
            </Path>
        </div>
    );
};

    <BasicPath />
```

# PathStep with error
##### Set the prop `hasError` to indicate that step is in error state.

```js
import React from 'react';
import { Path, PathStep } from 'react-rainbow-components';

const PathWithErrorInStep = () => {
    return (
        <div className="rainbow-p-around_x-large rainbow-align-content_center">
            <Path currentStepName="scheduled">
                <PathStep name="scheduled" label="Scheduled" hasError />
                <PathStep name="in-progress" label="InProgress" />
                <PathStep name="arrived" label="Arrived" />
                <PathStep name="delivered" label="Delivered" hasError />
            </Path>
        </div>
    );
};

    <PathWithErrorInStep />
```
