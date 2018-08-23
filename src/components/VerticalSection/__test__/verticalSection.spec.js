import React from 'react';
import { mount } from 'enzyme';
import VerticalSection from './../';

describe('<VerticalSection/>', () => {
    it('should have the right className the container element', () => {
        const component = mount(
            <VerticalSection />,
        );
        expect(component.find('div[className="slds-nav-vertical__section"]').exists()).toBe(true);
    });
    it('should pass the label passed to the Header component', () => {
        const component = mount(
            <VerticalSection label="header label" />,
        );
        expect(component.find('Header').prop('label')).toBe('header label');
    });
    it('should render the children passed', () => {
        const component = mount(
            <VerticalSection>
                the children text
            </VerticalSection>,
        );
        expect(component.find('ul').text()).toBe('the children text');
    });
});
