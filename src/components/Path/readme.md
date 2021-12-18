# The basic Path
##### Using the component is quite simple. As you can see in the code below, you just have to add some `PathStep` components within `Path` to make it work.

```js
import React, { useState } from 'react';
import { Path, PathStep } from 'react-rainbow-components';


const BasicPath = () => {
    const [currentStep, setCurrentStep] = useState('arrived');

    return (
        <div className="rainbow-p-around_x-large rainbow-align-content_center">
            <Path currentStepName={currentStep} onClick={setCurrentStep}>
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

# Path with error in step
##### To indicate that an error has occurred while executing a task, just set the prop `hasError` to the corresponding `PathStep`.


```js
import React, { useState, useCallback } from 'react';
import { Path, PathStep } from 'react-rainbow-components';


const PathWithErrorInStep = () => {
    const [currentStep, setCurrentStep] = useState('arrived');

    const handleClick = useCallback(stepName => {
        setCurrentStep(stepName);
    }, []);

    return (
        <div className="rainbow-p-around_x-large rainbow-align-content_center">
            <Path currentStepName={currentStep} onClick={handleClick}>
                <PathStep name="scheduled" label="Scheduled" />
                <PathStep name="in-progress" label="InProgress" hasError />
                <PathStep name="arrived" label="Arrived" hasError />
                <PathStep name="delivered" label="Delivered" hasError />
            </Path>
        </div>
    );
};

    <PathWithErrorInStep />
```
