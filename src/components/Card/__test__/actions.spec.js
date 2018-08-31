import React from 'react';
import { mount } from 'enzyme';
import Actions from './../actions';

describe('<Actions/>', () => {
    it('should render the actions node when actions is passed', () => {
        const component = mount(
            <Actions content={<div>my action</div>} />,
        );
        expect(component.find('.rainbow-no-flex').text()).toBe('my action');
    });
});
