import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import './styles.css';

/**
* A progress indicator component communicates to the user the progress of a particular process.
*/
export default class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.stepChildren = [];
        this.registerStep = this.registerStep.bind(this);
        this.setChildrenState = this.setChildrenState.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-progress-indicator', className);
    }

    setChildrenState(step) {
        const { currentStepName } = this.props;
        const activeStepIndex = this.stepChildren.findIndex(item => item.name === currentStepName);
        const currentChildIndex = this.stepChildren.findIndex(item => item.name === step.name);

        if (currentChildIndex === activeStepIndex) {
            step.onSetStepState('Active');
        } else if (activeStepIndex === -1 || currentChildIndex < activeStepIndex) {
            step.onSetStepState('Completed');
        } else if (currentChildIndex > activeStepIndex) {
            step.onSetStepState('Inactive');
        }
    }

    registerStep(step) {
        const newChildrenRefs = this.stepChildren.concat([step]);
        this.stepChildren = newChildrenRefs;
        this.setChildrenState(step);
    }

    render() {
        const {
            style,
            children,
            currentStepName,
            onClick,
        } = this.props;
        const context = {
            currentStepName,
            privateRegisterStep: this.registerStep,
            privateOnClick: onClick,
            setChildrenState: this.setChildrenState,
        };

        return (
            <div
                className={this.getContainerClassNames()}
                style={style}>
                <ol className="rainbow-progress-indicator_list">
                    <Provider value={context}>
                        { children }
                    </Provider>
                </ol>
                <div className="rainbow-progress-indicator_bar" />
            </div>
        );
    }
}

ProgressIndicator.propTypes = {
    /** The current step, which must match the name prop of one of ProgressStep components. */
    currentStepName: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

ProgressIndicator.defaultProps = {
    currentStepName: '',
    className: undefined,
    style: undefined,
    onClick: () => {},
    children: null,
};
