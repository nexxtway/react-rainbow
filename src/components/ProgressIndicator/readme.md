# The basic ProgressIndicator
##### This example shows a simple progress indicator that displays the steps of your process. It is ideal for a minimalistic design.

```js
import React, { useState } from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    Button,
} from 'react-rainbow-components';
import styled from 'styled-components';

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const SimpleProgressIndicator = () => {
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

    <SimpleProgressIndicator />;
```

# Clickable ProgressIndicator
##### You can add a handler to the `onClick` event so that users can select the specific step they want.

```js
import React, { useState } from 'react';
import { ProgressIndicator, ProgressStep } from 'react-rainbow-components';
import styled from 'styled-components';

const steps = {
    'step-1': 'first',
    'step-2': 'second',
    'step-3': 'third',
    'step-4': 'fourth',
    'step-5': 'fifth',
};

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const OnClickProgressIndicator = () => {
    const [currentStepName, setCurrentStepName] = useState('step-1');

    const handleOnClick = (event, name) => {
        setCurrentStepName(name);
    }

    return (
        <div className="rainbow-m-bottom_large rainbow-m-top_xx-large rainbow-p-bottom_large">
            <ProgressIndicator currentStepName={currentStepName} onClick={handleOnClick}>
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" />
                <ProgressStep name="step-4" label="Step 4" />
                <ProgressStep name="step-5" label="Step 5" />
            </ProgressIndicator>
            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <StyledIndicatorText>{`This is the ${steps[currentStepName]} step`}</StyledIndicatorText>
            </div>
        </div>
    );
}

    <OnClickProgressIndicator />;
```

# ProgressIndicator with numeric variant
##### If you want to show each step number, set the `variant` prop to 'numeric'.

```js
import React, { useState } from 'react';
import styled from 'styled-components';
import {
    ProgressIndicator,
    ProgressStep,
    Button,
    Input,
    RenderIf,
    DatePicker
} from 'react-rainbow-components';
import { Field, reduxForm } from 'redux-form';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const FormContainer = styled.div`
    max-width: 360px;
    margin: 16px auto;
`

const Title = styled.h1`
    font-size: 20px;
    color: ${props => props.theme.rainbow.palette.text.main};
`

const Description = styled.h2`
    font-size: 16px;
    color: ${props => props.theme.rainbow.palette.text.header};
    margin-top: 4px;
`

const StepForm = props => {
    const { handleSubmit, reset, onSubmit, stepIndex } = props;

    const submit = values => {
        onSubmit(values);
        reset();
    };

    return (
        <form id="step-form-9" noValidate onSubmit={handleSubmit(submit)}>
            <RenderIf isTrue={stepIndex === 0}>
                <Field
                    component={Input}
                    name="firstName"
                    required
                    label="Name"
                    placeholder="Enter your name"
                    className="rainbow-p-bottom_x-large"
                />
                <Field
                    component={Input}
                    name="lastName"
                    required
                    label="Last Name"
                    placeholder="Enter your last name"
                />
            </RenderIf>
            <RenderIf isTrue={stepIndex === 1}>
                <Field
                    component={Input}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    required
                    className="rainbow-p-bottom_x-large"
                />
                <Field
                    component={Input}
                    name="phone"
                    label="Phone number"
                    placeholder="Phone..."
                    required
                />
            </RenderIf>
            <RenderIf isTrue={stepIndex === 2}>
                <Field
                    id="datepicker-9"
                    component={DatePicker}
                    name="birthday"
                    label="Birthday"
                    placeholder="Select your date of birth"
                    required
                    className="rainbow-p-bottom_x-large"
                />
            </RenderIf>
            <RenderIf isTrue={stepIndex === 3}>
                <Field
                    component={Input}
                    name="username"
                    label="Username"
                    placeholder="Enter your username"
                    required
                    className="rainbow-p-bottom_x-large"
                />
                <Field
                    component={Input}
                    name="password"
                    label="Password"
                    placeholder="Write your password"
                    required
                />
            </RenderIf>
            <RenderIf isTrue={stepIndex === 4}>
                <div style={{ textAlign: 'center' }}>
                    <Title>This looks great</Title>
                    <Description>Press submit to complete registration.</Description>
                </div>
            </RenderIf>
        </form>
    )
}

const Form = reduxForm({
    form: 'numeric-step-form',
    touchOnBlur: false,
})(StepForm);

const NumericProgressIndicator = () => {
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

    const isLastStep = () => {
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
                <ProgressIndicator currentStepName={stepNames[currentStepIndex]} variant="numeric">
                    <ProgressStep name="step-1" label="Name" />
                    <ProgressStep name="step-2" label="Contact info" />
                    <ProgressStep name="step-3" label="Birthday" />
                    <ProgressStep name="step-4" label="Login info" />
                    <ProgressStep name="step-5" label="Finish" />
                </ProgressIndicator>
            </div>

            <FormContainer>
                <Form stepIndex={currentStepIndex} />
            </FormContainer>

            <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                <Button
                    label="Back"
                    onClick={handleBackClick}
                    variant="neutral"
                    disabled={isBackDisabled()}
                    className="rainbow-m-horizontal_medium"
                />
                <RenderIf isTrue={isLastStep()}>
                    <Button
                        label="Submit"
                        variant="brand"
                        className="rainbow-m-horizontal_medium"
                    />
                </RenderIf>
                <RenderIf isTrue={!isLastStep()}>
                    <Button
                        label="Next"
                        onClick={handleNextClick}
                        variant="brand"
                        className="rainbow-m-horizontal_medium"
                    />
                </RenderIf>
            </div>
        </div>
    );
}

    <NumericProgressIndicator />;
```

