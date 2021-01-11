# The basic ProgressStep
##### This example shows the default look of the progress steps.

```js
import React, { useState } from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    Button,
} from 'react-rainbow-components';
import styled from 'styled-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledLabel = styled.p.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
`;

const SimpleProgressStep = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleNextClick = () => {
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
        }
    }

    const handleBackClick = () => {
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            setCurrentStepIndex(previewStepIndex)
        }
    }

    const isNextDisabled = () => {
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    const isBackDisabled = () => {
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    return (
        <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
            <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
                <ProgressStep name="step-4" />
                <ProgressStep name="step-5" />
            </ProgressIndicator>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <StyledLabel>{`This is the ${steps[currentStepIndex]} step`}</StyledLabel>
            </div>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    label="Back"
                    onClick={handleBackClick}
                    variant="neutral"
                    disabled={isBackDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
                <Button
                    label="Next"
                    onClick={handleNextClick}
                    variant="brand"
                    disabled={isNextDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
            </div>
        </div>
    );
}

    <SimpleProgressStep />;
```

# ProgressStep with label
##### You can show a label on each step to comunicate users what is it about. You can do so using the `label` prop.

```js
import React, { useState } from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    Button,
} from 'react-rainbow-components';
import styled from 'styled-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const ProgressIndicatorWithLabel = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleNextClick = () => {
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
        }
    }

    const handleBackClick = () => {
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            setCurrentStepIndex(previewStepIndex)
        }
    }

    const isNextDisabled = () => {
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    const isBackDisabled = () => {
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    return (
        <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
            <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" />
                <ProgressStep name="step-4" label="Step 4" />
                <ProgressStep name="step-5" label="Step 5" />
            </ProgressIndicator>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <StyledIndicatorText>{`This is the ${steps[currentStepIndex]} step`}</StyledIndicatorText>
            </div>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    label="Back"
                    onClick={handleBackClick}
                    variant="neutral"
                    disabled={isBackDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
                <Button
                    label="Next"
                    onClick={handleNextClick}
                    variant="brand"
                    disabled={isNextDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
            </div>
        </div>
    );
}

    <ProgressIndicatorWithLabel />;
```

# ProgressStep with error
##### If one of your form steps has errors, you can show an error sign using the `hasError` prop in the corresponding step.

```js
import React, { useState } from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    Button,
} from 'react-rainbow-components';
import styled from 'styled-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const ProgressIndicatorWithError = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleNextClick = () => {
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
        }
    }

    const handleBackClick = () => {
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            setCurrentStepIndex(previewStepIndex)
        }
    }

    const isNextDisabled = () => {
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    const isBackDisabled = () => {
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    return (
        <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
            <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" hasError />
                <ProgressStep name="step-4" label="Step 4" />
                <ProgressStep name="step-5" label="Step 5" />
            </ProgressIndicator>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <StyledIndicatorText>{`This is the ${steps[currentStepIndex]} step`}</StyledIndicatorText>
            </div>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    label="Back"
                    onClick={handleBackClick}
                    variant="neutral"
                    disabled={isBackDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
                <Button
                    label="Next"
                    onClick={handleNextClick}
                    variant="brand"
                    disabled={isNextDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
            </div>
        </div>
    );
}

    <ProgressIndicatorWithError />;
```

# ProgressStep with tooltip
##### A tooltip can be used to display additional information about each step. Just set the `tooltip` prop to your desired content.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProgressIndicator, ProgressStep, Button } from 'react-rainbow-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const TooltipProgressIndicator = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleNextClick = () => {
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
        }
    }

    const handleBackClick = () => {
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            setCurrentStepIndex(previewStepIndex)
        }
    }

    const isNextDisabled = () => {
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    const isBackDisabled = () => {
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    return (
        <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
            <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
                <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                    <ProgressStep name="step-1" label="Step 1" tooltip="Name" />
                    <ProgressStep name="step-2" label="Step 2" tooltip="Contact information" />
                    <ProgressStep name="step-3" label="Step 3" tooltip="Birthday" />
                    <ProgressStep name="step-4" label="Step 4" tooltip="Login information" />
                    <ProgressStep name="step-5" label="Step 5" tooltip="Finish" />
                </ProgressIndicator>
            </div>

            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <StyledIndicatorText>{`This is the ${steps[currentStepIndex]} step`}</StyledIndicatorText>
            </div>

            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    label="Back"
                    onClick={handleBackClick}
                    variant="neutral"
                    disabled={isBackDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
                <Button
                    label="Next"
                    onClick={handleNextClick}
                    variant="brand"
                    disabled={isNextDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
            </div>
        </div>
    )
};

    <TooltipProgressIndicator />;
```

