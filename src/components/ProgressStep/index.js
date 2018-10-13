/* eslint-disable react/prop-types,jsx-a11y/label-has-for */
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
        this.stepRef = React.createRef();
    }

    componentDidMount() {
        const { privateRegisterStep, name } = this.props;
        return setTimeout(() => privateRegisterStep({ name, ref: this.stepRef.current }), 0);
    }

    getStepState() {
        const {
            name,
            stepChildren,
            currentStepName,
        } = this.props;
        let state = null;
        const activeStepIndex = stepChildren.findIndex(step => step.name === currentStepName);
        stepChildren.forEach((step, index) => {
            if (step.name === name) {
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
        const {
            className,
        } = this.props;
        return classnames('rainbow-progress-step', className);
    }

    getMarkerClassNames() {
        const { hasError } = this.props;
        const stepState = this.getStepState();
        return classnames('rainbow-progress-step_marker',
            {
                'rainbow-progress-step--is-completed': stepState === 'Completed' && !hasError,
                'rainbow-progress-step--is-active': stepState === 'Active' && !hasError,
                'rainbow-progress-step_error': hasError,
            },
        );
    }

    getAssistiveText() {
        const { label } = this.props;
        const stepState = this.getStepState();
        if (stepState) {
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

    render() {
        const {
            label,
        } = this.props;
        return (
            <li className={this.getContainerClassNames()}>
                <ButtonIcon
                    icon={this.getIcon()}
                    className={this.getMarkerClassNames()}
                    ref={this.stepRef}>
                    <AssistiveText text={this.getAssistiveText()} />
                </ButtonIcon>
                <label className="rainbow-progress-step_label">{label}</label>
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
    name: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.node,
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
