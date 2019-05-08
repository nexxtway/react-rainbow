import React from 'react';
import { mount } from 'enzyme';
import ProgressStep from '../';

describe('<ProgressStep />', () => {
    it('should set the right class names when custom class name is passed', () => {
        const component = mount(<ProgressStep className="my-custom-class-name" />);

        expect(component.find('li.rainbow-progress-step.my-custom-class-name').exists()).toBe(true);
    });
});
