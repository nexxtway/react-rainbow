import React from 'react';
import { mount } from 'enzyme';
import Notification from './../index';

describe('<Notification/>', () => {
    it('should fire an event when the close button is clicked', () => {
        const onClickFn = jest.fn();
        const component = mount(
            <Notification title="Notification test" onRequestClose={onClickFn} />,
        );
        component.find('button').simulate('click');
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
    it('should set the prop size as "small" in ButtonIcon', () => {
        const component = mount(<Notification title="Notification test" />);
        expect(component.find('ButtonIcon').prop('size')).toBe('small');
    });
    it('should not display the close button when hideCloseButton props is true', () => {
        const component = mount(<Notification title="Notification test" hideCloseButton />);
        expect(component.find('ButtonIcon').exists()).toBe(false);
    });
});
