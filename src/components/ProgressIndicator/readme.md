##### progress indicator base

```js
import React from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    ButtonGroup,
    ButtonIcon,
    Button,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

class SimpleProgressIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 0,
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleNextClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            return this.setState({ currentStepIndex: nextStepIndex });
        }
        return this.setState({ isNextDisabled: false });
    }

    handleBackClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            this.setState({ currentStepIndex: previewStepIndex });
        }
    }

    isNextDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    isBackDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    render() {
        const { currentStepIndex } = this.state;
        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">
                <GlobalHeader
                    src="images/user/user3.jpg"
                    className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
                >
                    <ButtonGroup>
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            variant="border-filled"
                            disabled
                        />
                    </ButtonGroup>
                </GlobalHeader>
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
                        onClick={this.handleBackClick}
                        variant="neutral"
                        disabled={this.isBackDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                    <Button
                        label="Next"
                        onClick={this.handleNextClick}
                        variant="brand"
                        disabled={this.isNextDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                </div>
            </div>
        );
    }
}

<SimpleProgressIndicator />;
```

##### progress indicator with label

```js
import React from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    ButtonGroup,
    ButtonIcon,
    Button,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

class ProgressIndicatorWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 1,
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleNextClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            return this.setState({ currentStepIndex: nextStepIndex });
        }
        return this.setState({ isNextDisabled: false });
    }

    handleBackClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            this.setState({ currentStepIndex: previewStepIndex });
        }
    }

    isNextDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    isBackDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    render() {
        const { currentStepIndex } = this.state;
        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">
                <GlobalHeader
                    src="images/user/user3.jpg"
                    className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
                >
                    <ButtonGroup>
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            variant="border-filled"
                            disabled
                        />
                    </ButtonGroup>
                </GlobalHeader>
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
                        onClick={this.handleBackClick}
                        variant="neutral"
                        disabled={this.isBackDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                    <Button
                        label="Next"
                        onClick={this.handleNextClick}
                        variant="brand"
                        disabled={this.isNextDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                </div>
            </div>
        );
    }
}

<ProgressIndicatorWithLabel />;
```

##### progress indicator with error

```js
import React from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    ButtonGroup,
    ButtonIcon,
    Button,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

const StyledIndicatorText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

class ProgressIndicatorWithError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepIndex: 1,
        };
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleNextClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            return this.setState({ currentStepIndex: nextStepIndex });
        }
        return this.setState({ isNextDisabled: false });
    }

    handleBackClick() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0) {
            const previewStepIndex = currentStepIndex - 1;
            this.setState({ currentStepIndex: previewStepIndex });
        }
    }

    isNextDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex < stepNames.length - 1 && currentStepIndex >= 0) {
            return false;
        }
        return true;
    }

    isBackDisabled() {
        const { currentStepIndex } = this.state;
        if (currentStepIndex > 0 && currentStepIndex < stepNames.length) {
            return false;
        }
        return true;
    }

    render() {
        const { currentStepIndex } = this.state;
        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">
                <GlobalHeader
                    src="images/user/user3.jpg"
                    className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
                >
                    <ButtonGroup>
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            variant="border-filled"
                            disabled
                        />
                    </ButtonGroup>
                </GlobalHeader>
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
                        onClick={this.handleBackClick}
                        variant="neutral"
                        disabled={this.isBackDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                    <Button
                        label="Next"
                        onClick={this.handleNextClick}
                        variant="brand"
                        disabled={this.isNextDisabled()}
                        className="rainbow-m-horizontal_medium"
                    />
                </div>
            </div>
        );
    }
}

<ProgressIndicatorWithError />;
```

##### progress indicator with click

```js
import React from 'react';
import { ProgressIndicator, ProgressStep, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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

class OnClickProgressIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStepName: 'step-1',
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event, name) {
        this.setState({ currentStepName: name });
    }

    render() {
        const { currentStepName } = this.state;
        return (
            <div className="rainbow-m-bottom_large rainbow-p-bottom_large">
                <GlobalHeader
                    src="images/user/user3.jpg"
                    className="rainbow-p-bottom_medium rainbow-m-bottom_medium"
                >
                    <ButtonGroup>
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faPlus} />}
                            variant="border-filled"
                            disabled
                        />
                        <ButtonIcon
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            variant="border-filled"
                            disabled
                        />
                    </ButtonGroup>
                </GlobalHeader>
                <ProgressIndicator currentStepName={currentStepName} onClick={this.handleOnClick}>
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
}

<OnClickProgressIndicator />;
```
