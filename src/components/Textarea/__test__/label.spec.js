import React from 'react';
import { mount } from 'enzyme';
import Label from './../label';

describe('<TextareaLabel/>', () => {
    it('should set the textareaId passed as the htmlFor prop in the label element', () => {
        const component = mount(<Label label="Textarea Label" textareaId="textarea-213" />);
        expect(component.find('label').prop('htmlFor')).toBe('textarea-213');
    });
    it('should set the id passed as the id prop in the label element', () => {
        const component = mount(<Label label="Textarea Label" id="label-123" />);
        expect(component.find('label').prop('id')).toBe('label-123');
    });
    it('should set the required prop passed in the RequiredAsterisk component', () => {
        const component = mount(<Label label="Textarea Label" required />);
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should add the right class names', () => {
        const component = mount(<Label label="Textarea Label" />);
        expect(component.find('.rainbow-textarea_label').exists()).toBe(true);
    });
    it('should add the right class names when hideLabel is passed', () => {
        const component = mount(<Label label="Textarea Label" hideLabel />);
        expect(
            component.find('.rainbow-textarea_label.rainbow-textarea_label--hide-label').exists(),
        ).toBe(true);
    });
});
