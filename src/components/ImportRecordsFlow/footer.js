import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ProgressIndicator from '../ProgressIndicator';
import ProgressStep from '../ProgressStep';

export default function DirectionalFooter(props) {
    const { onBack, onNext, currentStep, isBackButtonDisabled, isNextButtonDisabled } = props;

    const getLabel = () => {
        if (currentStep === 'step-4') {
            return 'Start Import';
        }
        return 'Next';
    };

    return (
        <div className="rainbow-import-records-flow_footer">
            <Button
                className="rainbow-import-records-flow_footer-back-button"
                label="Back"
                onClick={onBack}
                disabled={isBackButtonDisabled}
            />
            <ProgressIndicator currentStepName={currentStep}>
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
                <ProgressStep name="step-4" />
            </ProgressIndicator>
            <Button
                className="rainbow-import-records-flow_footer-next-button"
                label={getLabel()}
                variant="brand"
                onClick={onNext}
                disabled={isNextButtonDisabled}
            />
        </div>
    );
}

DirectionalFooter.propTypes = {
    onBack: PropTypes.func,
    onNext: PropTypes.func,
    currentStep: PropTypes.string,
    isBackButtonDisabled: PropTypes.bool,
    isNextButtonDisabled: PropTypes.bool,
};

DirectionalFooter.defaultProps = {
    onBack: () => {},
    onNext: () => {},
    currentStep: undefined,
    isBackButtonDisabled: false,
    isNextButtonDisabled: false,
};
