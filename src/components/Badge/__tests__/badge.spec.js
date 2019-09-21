import React from 'react';
import { mount } from 'enzyme';
import Badge from './../index';

describe('<Badge/>', () => {
    it('should render the "Badge" with the label passed', () => {
        const component = mount(<Badge label="Testing label in Badge" />);
        expect(component.find('Content').text()).toBe('Testing label in Badge');
    });
    it('should render the "Badge" with the children passed', () => {
        const component = mount(<Badge>Testing children in Badge</Badge>);
        expect(component.find('Content').text()).toBe('Testing children in Badge');
    });
    it('should not render the "Badge" when label and children are not passed', () => {
        const component = mount(<Badge />);
        expect(component.children().length).toBe(0);
    });
});
