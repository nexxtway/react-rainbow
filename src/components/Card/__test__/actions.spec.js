import React from 'react';
import { mount } from 'enzyme';
import Actions from './../actions';

describe('<Actions/>', () => {
    it('should render the actions node when actions is passed', () => {
        const component = mount(
            <Actions content="my action" />,
        );
        expect(component.find('div').text()).toBe('my action');
    });
});
