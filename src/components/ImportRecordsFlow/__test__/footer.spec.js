import React from 'react';
import { mount } from 'enzyme';
import Footer from '../footer';

describe('<Footer />', () => {
    it('should have back button disabled when isBackButtonDisabled is set to true', () => {
        const component = mount(<Footer isBackButtonDisabled />);
        const prevButton = component.find('button').first();
        expect(prevButton.prop('disabled')).toBe(true);
    });
    it('should have next button disabled when isNextButtonDisabled is set to true', () => {
        const component = mount(<Footer isNextButtonDisabled />);
        const nextButton = component.find('button').last();
        expect(nextButton.prop('disabled')).toBe(true);
    });
    it('should have right label for all steps but the last', () => {
        const component = mount(<Footer isNextButtonDisabled currentStep="step-2" />);
        const nextButton = component.find('button').last();
        expect(nextButton.text()).toBe('Next');
    });
    it('should have right label for last step button', () => {
        const lastStep = 'step-4';
        const component = mount(<Footer isNextButtonDisabled currentStep={lastStep} />);
        const nextButton = component.find('button').last();
        expect(nextButton.text()).toBe('Start Import');
    });
});
