##### progress indicator base

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const style = { paddingLeft: '30px', paddingRight: '30px' }

    const stepNames = [ 'step-1', 'step-2', 'step-3', 'step-4', 'step-5' ];

    const steps = [ 'first', 'second', 'third', 'fourth', 'fifth' ];

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
                    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_medium rainbow-m-bottom_medium">
                        <ButtonGroup>
                            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                            <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-m-horizontal_xx-large">
                        <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                            <ProgressStep name="step-1" />
                            <ProgressStep name="step-2" />
                            <ProgressStep name="step-3" />
                            <ProgressStep name="step-4" />
                            <ProgressStep name="step-5" />
                        </ProgressIndicator>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                        <p>{`This is the ${steps[currentStepIndex]} step`}</p>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap" >
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Back"
                                onClick={this.handleBackClick}
                                variant="neutral"
                                disabled={this.isBackDisabled()} />
                        </div>
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Next"
                                onClick={this.handleNextClick}
                                variant="brand"
                                disabled={this.isNextDisabled()} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <SimpleProgressIndicator />

##### progress indicator with label

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const style = { paddingLeft: '30px', paddingRight: '30px' }

    const stepNames = [ 'step-1', 'step-2', 'step-3', 'step-4', 'step-5' ];

    const steps = [ 'first', 'second', 'third', 'fourth', 'fifth' ];

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
                    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_medium rainbow-m-bottom_medium">
                        <ButtonGroup>
                            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                            <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-m-horizontal_xx-large" >
                        <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                            <ProgressStep name="step-1" label="Step 1" />
                            <ProgressStep name="step-2" label="Step 2" />
                            <ProgressStep name="step-3" label="Step 3" />
                            <ProgressStep name="step-4" label="Step 4" />
                            <ProgressStep name="step-5" label="Step 5" />
                        </ProgressIndicator>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                        <p>{`This is the ${steps[currentStepIndex]} step`}</p>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap" >
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Back"
                                onClick={this.handleBackClick}
                                variant="neutral"
                                disabled={this.isBackDisabled()} />
                        </div>
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Next"
                                onClick={this.handleNextClick}
                                variant="brand"
                                disabled={this.isNextDisabled()} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <ProgressIndicatorWithLabel />

##### progress indicator with error

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const style = { paddingLeft: '30px', paddingRight: '30px' }

    const stepNames = [ 'step-1', 'step-2', 'step-3', 'step-4', 'step-5' ];

    const steps = [ 'first', 'second', 'third', 'fourth', 'fifth' ];

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
                    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_medium rainbow-m-bottom_medium">
                        <ButtonGroup>
                            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                            <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-m-horizontal_xx-large" >
                        <ProgressIndicator currentStepName={stepNames[currentStepIndex]}>
                            <ProgressStep name="step-1" label="Step 1" />
                            <ProgressStep name="step-2" label="Step 2" />
                            <ProgressStep name="step-3" label="Step 3" hasError />
                            <ProgressStep name="step-4" label="Step 4" />
                            <ProgressStep name="step-5" label="Step 5" />
                        </ProgressIndicator>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                        <p>{`This is the ${steps[currentStepIndex]} step`}</p>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap" >
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Back"
                                onClick={this.handleBackClick}
                                variant="neutral"
                                disabled={this.isBackDisabled()} />
                        </div>
                        <div className="rainbow-m-horizontal_medium">
                            <Button
                                style={style}
                                label="Next"
                                onClick={this.handleNextClick}
                                variant="brand"
                                disabled={this.isNextDisabled()} />
                        </div>
                    </div>
                </div>
            );
        }
    }

    <ProgressIndicatorWithError />

##### progress indicator with click

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    const steps = { 'step-1': 'first' , 'step-2': 'second', 'step-3': 'third', 'step-4': 'fourth', 'step-5': 'fifth' };

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
                    <GlobalHeader src="images/user/user3.jpg" className="rainbow-p-bottom_medium rainbow-m-bottom_medium">
                        <ButtonGroup>
                            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
                            <ButtonIcon icon={<FontAwesomeIcon icon={faEllipsisV} />} variant="border-filled" disabled />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-m-horizontal_xx-large" >
                        <ProgressIndicator currentStepName={currentStepName}
                            onClick={this.handleOnClick}>
                            <ProgressStep name="step-1" label="Step 1" />
                            <ProgressStep name="step-2" label="Step 2" />
                            <ProgressStep name="step-3" label="Step 3" />
                            <ProgressStep name="step-4" label="Step 4" />
                            <ProgressStep name="step-5" label="Step 5" />
                        </ProgressIndicator>
                    </div>
                    <div className="rainbow-m-top_xx-large rainbow-align-content_center rainbow-flex_wrap">
                        <p>{`This is the ${steps[currentStepName]} step`}</p>
                    </div>
                </div>
            );
        }
    }

    <OnClickProgressIndicator />
