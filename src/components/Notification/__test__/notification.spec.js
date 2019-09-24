import React from 'react';
import { mount } from 'enzyme';
import Notification from './../index';

describe('<Notification/>', () => {
    it('should fire an event when the close button is clicked', () => {
        const onClickFn = jest.fn();
        const component = mount(
            <Notification title="Notification test" onRequestClose={onClickFn} />,
        );
        component.find('button.rainbow-notification_close').simulate('click');
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
    it('should set the prop size as "small" in ButtonIcon', () => {
        const component = mount(<Notification title="Notification test" />);
        expect(component.find('ButtonIcon').prop('size')).toBe('small');
    });
    it('should have the right class names', () => {
        const component = mount(<Notification title="Notification test" />);
        expect(component.find('div').prop('className')).toBe('rainbow-notification');
    });
    it('should have the right class names when have a custom class', () => {
        const component = mount(
            <Notification title="Notification test" className="my-custom-class-name" />,
        );
        expect(component.find('div').prop('className')).toBe(
            'rainbow-notification my-custom-class-name',
        );
    });
    it('should not display the close button when hideCloseButton props is true', () => {
        const component = mount(<Notification title="Notification test" hideCloseButton />);
        expect(component.find('ButtonIcon').exists()).toBe(false);
    });
});
