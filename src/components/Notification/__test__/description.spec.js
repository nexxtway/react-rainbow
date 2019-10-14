import React from 'react';
import { mount } from 'enzyme';
import Description from './../description';

describe('<NotificationDescription/>', () => {
    it('should render the string passed as text in the tag "p"', () => {
        const component = mount(<Description text="test-description" />);
        expect(component.find('p').text()).toBe('test-description');
    });
    it('should render the "span" passed as text', () => {
        const component = mount(<Description text={<span />} />);
        expect(component.find('span').exists()).toBe(true);
    });
});
