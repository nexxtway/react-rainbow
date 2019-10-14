import React from 'react';
import { mount } from 'enzyme';
import Title from './../title';

describe('<NotificationTitle/>', () => {
    it('should render the string passed as text in the tag "h1"', () => {
        const component = mount(<Title text="test-title" />);
        expect(component.find('h1').text()).toBe('test-title');
    });
    it('should render the "title" passed as text', () => {
        const component = mount(<Title text={<title />} />);
        expect(component.find('title').exists()).toBe(true);
    });
});
