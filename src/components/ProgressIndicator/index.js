import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import StyledContainer from './styled/container';
import StyledIndicatorList from './styled/indicatorList';
import StyledIndicatorBar from './styled/indicatorBar';

/**
 * The ProgressIndicator is a visual representation of a user's progress through a set of steps.
 * To add the steps, you will need to implement the `ProgressStep` component.
 */
export default class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.stepChildren = [];
        this.numbersMap = {};
        this.registerStep = this.registerStep.bind(this);
        this.setChildrenState = this.setChildrenState.bind(this);
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
        const { name } = step;
        this.numbersMap[name] = newChildrenRefs.length;
        this.setChildrenState(step);
    }

    render() {
        const { style, className, variant, children, currentStepName, onClick } = this.props;
        const context = {
            currentStepName,
            privateRegisterStep: this.registerStep,
            privateOnClick: onClick,
            setChildrenState: this.setChildrenState,
            numbersMap: this.numbersMap,
            variant,
        };

        return (
            <StyledContainer className={className} style={style}>
                <StyledIndicatorList>
                    <Provider value={context}>{children}</Provider>
                </StyledIndicatorList>
                <StyledIndicatorBar />
            </StyledContainer>
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
    /** The variant of the ProgressIndicator */
    variant: PropTypes.oneOf(['default', 'numeric']),
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
    variant: 'default',
    onClick: () => {},
    children: null,
};
