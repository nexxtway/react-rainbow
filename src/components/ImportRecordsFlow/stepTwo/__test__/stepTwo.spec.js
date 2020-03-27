import React from 'react';
import { mount } from 'enzyme';
import StepTwo from '../';

describe('<StepTwo />', () => {
    it('should show preview if file has been selected', () => {
        const component = mount(<StepTwo hasFileSelected />);
        expect(component.find('Preview').exists()).toBe(true);
    });
    it('should show upload manager if file has not been selected', () => {
        const component = mount(<StepTwo hasFieldSelected={false} />);
        expect(component.find('UploadFileButton').exists()).toBe(true);
    });
    it('should show default upload presentation on load', () => {
        const component = mount(<StepTwo />);
        const renderIfBlock = component.find('RenderIf').at(1);
        expect(renderIfBlock.prop('isTrue')).toBe(true);
    });
    it('should hide the draggable upload presentation on load', () => {
        const component = mount(<StepTwo />);
        const renderIfBlock = component.find('RenderIf').at(0);
        expect(renderIfBlock.prop('isTrue')).toBe(false);
    });
});
