import React from 'react';
import { mount } from 'enzyme';
import Footer from '../footer';
import StyledBackButton from '../styled/backButton';
import StyledNextButton from '../styled/nextButton';

describe('<Footer />', () => {
    it('should have back button disabled when isBackButtonDisabled is set to true', () => {
        const component = mount(<Footer isBackButtonDisabled />);
        const prevButton = component.find(StyledBackButton);
        expect(prevButton.prop('disabled')).toBe(true);
    });
    it('should have next button disabled when isNextButtonDisabled is set to true', () => {
        const component = mount(<Footer isNextButtonDisabled />);
        const nextButton = component.find(StyledNextButton);
        expect(nextButton.prop('disabled')).toBe(true);
    });
    it('should have right label for all steps but the last', () => {
        const component = mount(<Footer isNextButtonDisabled currentStep="step-2" />);
        const nextButton = component.find(StyledNextButton);
        expect(nextButton.prop('label')).toBe('Next');
    });
    it('should have right label for last step button', () => {
        const lastStep = 'step-4';
        const component = mount(<Footer isNextButtonDisabled currentStep={lastStep} />);
        const nextButton = component.find(StyledNextButton);
        expect(nextButton.prop('label')).toBe('Start Import');
    });
});
