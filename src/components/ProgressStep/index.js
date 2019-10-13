/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from '../ButtonIcon';
import { Consumer } from '../ProgressIndicator/context';
import DoneIcon from './doneIcon';
import ErrorIcon from './errorIcon';
import './styles.css';

const iconMap = {
    Error: () => <ErrorIcon />,
    Completed: () => <DoneIcon />,
    Active: () => <div className="rainbow-progress-step--is-active_icon" />,
    Inactive: () => <div className="rainbow-progress-step_marker_icon" />,
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

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-progress-step', className);
    }

    getButtonClassNames() {
        const { stepState } = this.state;
        return classnames({
            'rainbow-progress-step_marker': stepState === 'Inactive',
            'rainbow-progress-step--is-completed': stepState === 'Completed',
            'rainbow-progress-step--is-active': stepState === 'Active',
            'rainbow-progress-step--error': stepState === 'Error',
        });
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
        const { label } = this.props;

        return (
            <li className={this.getContainerClassNames()}>
                <ButtonIcon
                    icon={this.getIcon()}
                    className={this.getButtonClassNames()}
                    onClick={this.handleOnClick}
                    assistiveText={this.getAssistiveText()}
                />
                <span className="rainbow-progress-step_label">{label}</span>
            </li>
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
