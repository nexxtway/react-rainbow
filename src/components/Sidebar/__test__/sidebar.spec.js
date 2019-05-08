import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../index';

describe('<Sidebar>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <Sidebar>
                <p>Test Child</p>
            </Sidebar>,
        );
        expect(component.find('p').text()).toBe('Test Child');
    });
    it('should set the ariaLabel passed as aria-label in the nav element', () => {
        const component = mount(<Sidebar ariaLabel="my label" />);
        expect(component.find('nav').prop('aria-label')).toBe('my label');
    });
});
