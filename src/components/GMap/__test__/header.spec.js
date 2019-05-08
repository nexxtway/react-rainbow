import React from 'react';
import { mount } from 'enzyme';
import Header from './../header';

describe('<Header/>', () => {
    it('should render the text passed inside an h2 element when is a string', () => {
        const component = mount(<Header text="some title" />);
        expect(component.find('h2').text()).toBe('some title');
    });
    it('should return the same text passed when it is not a string', () => {
        const component = mount(<Header text={<span>some text</span>} />);
        expect(component.find('span').text()).toBe('some text');
    });
});
