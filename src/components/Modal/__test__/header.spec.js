import React from 'react';
import { mount } from 'enzyme';
import Header from './../header';

describe('<Header/>', () => {
    it('should set the title passed', () => {
        const component = mount(<Header title="my title" />);
        expect(component.find('h1').text()).toBe('my title');
    });
    it('should render the title passed if is not a string', () => {
        const component = mount(<Header title={<p>my title</p>} />);
        expect(component.find('p').text()).toBe('my title');
    });
});
