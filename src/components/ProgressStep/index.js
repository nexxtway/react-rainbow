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
import RenderIf from '../RenderIf';
import StyledStepNumberButton from './styled/stepNumberButton';
import InternalTooltip from '../InternalTooltip';
import { WindowScrolling } from '../../libs/scrollController';

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
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
        this.windowScrolling = new WindowScrolling();
        this.triggerRef = React.createRef();
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
        const { setChildrenState } = this.props;
        if (prevCurrentStepName !== currentStepName) {
            setChildrenState({
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

    showTooltip() {
        this.windowScrolling.startListening(this.hideTooltip);
        this.setState({
            isTooltipVisible: true,
        });
    }

    hideTooltip() {
        const { isTooltipVisible } = this.state;
        this.windowScrolling.stopListening();
        if (isTooltipVisible) {
            this.setState({
                isTooltipVisible: false,
            });
        }
    }

    handleOnClick(event) {
        const { privateOnClick, name } = this.props;
        return privateOnClick(event, name);
    }

    render() {
        const { label, className, variant, name, numbersMap, tooltip } = this.props;
        const { stepState, isTooltipVisible } = this.state;

        const shouldRenderNumber =
            variant === 'numeric' && (stepState === 'Inactive' || stepState === 'Active');

        return (
            <StyledStep
                className={className}
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                ref={this.triggerRef}
            >
                <RenderIf isTrue={!shouldRenderNumber}>
                    <StyledStepButton
                        stepState={stepState}
                        icon={this.getIcon()}
                        onClick={this.handleOnClick}
                        assistiveText={this.getAssistiveText()}
                    />
                </RenderIf>
                <RenderIf isTrue={shouldRenderNumber}>
                    <StyledStepNumberButton
                        stepState={stepState}
                        onClick={this.handleOnClick}
                        assistiveText={this.getAssistiveText()}
                    >
                        {numbersMap[name]}
                    </StyledStepNumberButton>
                </RenderIf>
                <StyledLabel stepState={stepState}>{label}</StyledLabel>
                <RenderIf isTrue={tooltip}>
                    <InternalTooltip
                        triggerElementRef={() => this.triggerRef}
                        isVisible={isTooltipVisible}
                        preferredPosition="top"
                    >
                        {tooltip}
                    </InternalTooltip>
                </RenderIf>
            </StyledStep>
        );
    }
}

/**
 * A progress step represents one step of the progress indicator.
 */
export default function ProgressStep(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
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
    /** Text to show when pointer is over the step */
    tooltip: PropTypes.string,
};

ProgressStep.defaultProps = {
    name: '',
    label: '',
    hasError: false,
    className: undefined,
    style: undefined,
    tooltip: undefined,
};
