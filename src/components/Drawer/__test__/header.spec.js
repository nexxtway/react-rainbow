import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';

describe('<Header/>', () => {
    it('should set the content passed', () => {
        const component = mount(<Header content="my title" />);
        expect(component.find('h1').text()).toBe('my title');
    });
    it('should render the content passed if is not a string', () => {
        const component = mount(<Header content={<p>my title</p>} />);
        expect(component.find('p').text()).toBe('my title');
    });
});
