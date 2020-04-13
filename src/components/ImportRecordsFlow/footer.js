import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import ProgressIndicator from '../ProgressIndicator';
import ProgressStep from '../ProgressStep';
import StyledFooter from './styled/footer';
import StyledBackButton from './styled/backButton';
import StyledNextButton from './styled/nextButton';

export default function DirectionalFooter(props) {
    const {
        onBack,
        onNext,
        currentStep,
        isBackButtonDisabled,
        isNextButtonDisabled,
        actionType,
    } = props;

    const getLabel = () => {
        if (currentStep === 'step-4') {
            return 'Start Import';
        }
        return 'Next';
    };

    return (
        <StyledFooter>
            <StyledBackButton label="Back" onClick={onBack} disabled={isBackButtonDisabled} />
            <ProgressIndicator currentStepName={currentStep}>
                <RenderIf isTrue={!actionType}>
                    <ProgressStep name="step-1" />
                </RenderIf>
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
                <ProgressStep name="step-4" />
            </ProgressIndicator>
            <StyledNextButton
                label={getLabel()}
                variant="brand"
                onClick={onNext}
                disabled={isNextButtonDisabled}
            />
        </StyledFooter>
    );
}

DirectionalFooter.propTypes = {
    onBack: PropTypes.func,
    onNext: PropTypes.func,
    currentStep: PropTypes.string,
    isBackButtonDisabled: PropTypes.bool,
    isNextButtonDisabled: PropTypes.bool,
    actionType: PropTypes.string,
};

DirectionalFooter.defaultProps = {
    onBack: () => {},
    onNext: () => {},
    currentStep: undefined,
    isBackButtonDisabled: false,
    isNextButtonDisabled: false,
    actionType: undefined,
};
