import React from 'react';
import { mount } from 'enzyme';
import HeaderTitle from './../headerTitle';

describe('<HeaderTitle/>', () => {
    it('should set the title passed', () => {
        const component = mount(<HeaderTitle title="my title" />);
        expect(component.find('.rainbow-card_title').text()).toBe('my title');
    });
});
