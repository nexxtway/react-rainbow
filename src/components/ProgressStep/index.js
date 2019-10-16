/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../ProgressIndicator/context';
import DoneIcon from './doneIcon';
import ErrorIcon from './errorIcon';
import StyledStep from './styled/step';
import StyledStepButton from './styled/stepButton';
import StyledInactiveIcon from './styled/inactiveIcon';
import StyledActiveIcon from './styled/activeIcon';
import StyledLabel from './styled/label';

const iconMap = {
    Error: () => <ErrorIcon />,
    Completed: () => <DoneIcon />,
    Active: () => <StyledActiveIcon />,
    Inactive: () => <StyledInactiveIcon />,
};

class StepItem extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.setStepState = this.setStepState.bind(this);
        this.state = {
            stepState: 'Inactive',
        };
    }

    componentDidMount() {
        const { privateRegisterStep, name } = this.props;
        return setTimeout(
            () =>
                privateRegisterStep({
                    name,
                    onSetStepState: this.setStepState,
                }),
            0,
        );
    }

    componentDidUpdate({ currentStepName: prevCurrentStepName }) {
        const { currentStepName, name } = this.props;
        if (prevCurrentStepName !== currentStepName) {
            this.props.setChildrenState({
                name,
                onSetStepState: this.setStepState,
            });
        }
    }

    setStepState(stepState) {
        const { hasError } = this.props;
        if (hasError) {
            return this.setState({ stepState: 'Error' });
        }
        return this.setState({ stepState });
    }

    getAssistiveText() {
        const { label } = this.props;
        const { stepState } = this.state;

        if (label && stepState !== 'Inactive') {
            return `${label} - ${stepState}`;
        }
        if (label) {
            return label;
        }
        if (stepState) {
            return stepState;
        }
        return '';
    }

    getIcon() {
        const { stepState } = this.state;
        if (iconMap[stepState]) {
            return iconMap[stepState]();
        }
        return null;
    }

    handleOnClick(event) {
        const { privateOnClick, name } = this.props;
        return privateOnClick(event, name);
    }

    render() {
        const { label, className } = this.props;
        const { stepState } = this.state;

        return (
            <StyledStep className={className}>
                <StyledStepButton
                    stepState={stepState}
                    icon={this.getIcon()}
                    onClick={this.handleOnClick}
                    assistiveText={this.getAssistiveText()}
                />
                <StyledLabel stepState={stepState}>{label}</StyledLabel>
            </StyledStep>
        );
    }
}

export default function ProgressStep(props) {
    return <Consumer>{context => <StepItem {...props} {...context} />}</Consumer>;
}

ProgressStep.propTypes = {
    /** The name is used to determine which ProgressStep is active. */
    name: PropTypes.string,
    /** Text label for the ProgressStep. */
    label: PropTypes.node,
    /** Indicates whether the current step is in error state and displays a warning icon
     * on the step indicator. This value defaults to false. */
    hasError: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ProgressStep.defaultProps = {
    name: '',
    label: '',
    hasError: false,
    className: undefined,
    style: undefined,
};
