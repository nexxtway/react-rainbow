import React from 'react';
import { mount } from 'enzyme';
import ProgressIndicator from './../index';

describe('<ProgressIndicator/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <ProgressIndicator>
                ProgressStep
            </ProgressIndicator>,
        );
        expect(component.text()).toBe('ProgressStep');
    });
    it('should have the right class names when a custom class is passed', () => {
        const component = mount(
            <ProgressIndicator className="my-custom-class-name" />,
        );
        expect(component.find('div.rainbow-progress-indicator.my-custom-class-name').exists()).toBe(true);
    });
});
