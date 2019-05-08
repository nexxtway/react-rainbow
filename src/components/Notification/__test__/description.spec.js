import React from 'react';
import { mount } from 'enzyme';
import Description from './../description';

describe('<NotificationDescription/>', () => {
    it('should have the right class names', () => {
        const component = mount(<Description text="test-description" />);
        expect(component.find('p').prop('className')).toBe('rainbow-notification_description');
    });
    it('should render the string passed as text in the tag "p"', () => {
        const component = mount(<Description text="test-description" />);
        expect(component.find('p.rainbow-notification_description').text()).toBe(
            'test-description',
        );
    });
    it('should render the "span" passed as text', () => {
        const component = mount(<Description text={<span />} />);
        expect(component.find('span').exists()).toBe(true);
    });
});
