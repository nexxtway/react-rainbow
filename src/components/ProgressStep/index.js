/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from '../AssistiveText';
import ButtonIcon from '../ButtonIcon';
import { Consumer } from '../ProgressIndicator/context';
import DoneIcon from './doneIcon';
import ErrorIcon from './errorIcon';
import './styles.css';

class StepItem extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        const { privateRegisterStep, name } = this.props;
        return setTimeout(() => privateRegisterStep(name), 0);
    }

    getStepState() {
        const {
            name: stepName,
            stepChildren,
            currentStepName,
        } = this.props;
        let state = null;
        const activeStepIndex = stepChildren.findIndex(name => name === currentStepName);
        stepChildren.forEach((name, index) => {
            if (name === stepName) {
                if (index === activeStepIndex) {
                    state = 'Active';
                } else if (index < activeStepIndex) {
                    state = 'Completed';
                }
            }
        });
        return state;
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-progress-step', className);
    }

    getButtonClassNames() {
        const { hasError } = this.props;
        const stepState = this.getStepState();
        return classnames('rainbow-progress-step_marker', {
            'rainbow-progress-step--is-completed': stepState === 'Completed' && !hasError,
            'rainbow-progress-step--is-active': stepState === 'Active' && !hasError,
            'rainbow-progress-step--error': hasError,
        });
    }

    getAssistiveText() {
        const { label, hasError } = this.props;
        const stepState = this.getStepState();
        if (hasError) {
            return `${label} - Error`;
        } else if (stepState) {
            return `${label} - ${stepState}`;
        }
        return label;
    }

    getIcon() {
        const { hasError } = this.props;
        const stepState = this.getStepState();
        if (hasError) {
            return <ErrorIcon />;
        } else if (stepState === 'Completed') {
            return <DoneIcon />;
        }
        return null;
    }

    handleOnClick(event) {
        const { privateOnClick, name } = this.props;
        return privateOnClick(event, name);
    }

    render() {
        const { label } = this.props;
        return (
            <li className={this.getContainerClassNames()}>
                <ButtonIcon
                    icon={this.getIcon()}
                    className={this.getButtonClassNames()}
                    onClick={this.handleOnClick}>
                    <AssistiveText text={this.getAssistiveText()} />
                </ButtonIcon>
                <span className="rainbow-progress-step_label">{label}</span>
            </li>
        );
    }
}

export default function ProgressStep(props) {
    return (
        <Consumer>
            {context => <StepItem {...props} {...context} />}
        </Consumer>
    );
}

ProgressStep.propTypes = {
    /** The name is used to determine which ProgressStep is active. */
    name: PropTypes.string,
    /** Text label for the ProgressStep. */
    label: PropTypes.node,
    /** Specifies if the ProgressStep has an error */
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
