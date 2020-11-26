##### PathStep basic example

```js
import React from 'react';
import { Path, PathStep } from 'react-rainbow-components';

const initialState = { currentStep: 'arrived' };

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <Path currentStepName={state.currentStep} onClick={stepName => setState({ currentStep: stepName })}>
            <PathStep name="scheduled" label="Scheduled" />
            <PathStep name="in-progress" label="InProgress" />
            <PathStep name="arrived" label="Arrived" />
            <PathStep name="delivered" label="Delivered" />
        </Path>
    </div>
```

##### PathStep with error

```js
import React from 'react';
import { Path, PathStep } from 'react-rainbow-components';

const initialState = { currentStep: 'delivered', hasError: true };

    <div className="rainbow-p-around_x-large rainbow-align-content_center">
        <Path currentStepName={state.currentStep}>
            <PathStep name="scheduled" label="Scheduled" />
            <PathStep name="in-progress" label="InProgress" />
            <PathStep name="arrived" label="Arrived" />
            <PathStep name="delivered" label="Delivered" hasError={state.hasError} />
        </Path>
    </div>
```
