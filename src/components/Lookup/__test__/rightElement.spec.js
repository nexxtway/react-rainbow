import React from 'react';
import { mount } from 'enzyme';
import RightElement from '../rightElement';
import StyledInputIcon from '../styled/inputIcon';

describe('<RightElement />', () => {
    it('should render an icon container', () => {
        const component = mount(<RightElement />);
        expect(component.find(StyledInputIcon).exists()).toBe(true);
    });
    it('should render a close button when showCloseButton is passed', () => {
        const component = mount(<RightElement showCloseButton />);
        expect(component.find('ButtonIcon').exists()).toBe(true);
    });
    it('should fire an event when click the button', () => {
        const onClearMockFn = jest.fn();
        const component = mount(<RightElement showCloseButton onClear={onClearMockFn} />);
        component.find('ButtonIcon').simulate('click');
        expect(onClearMockFn).toHaveBeenCalledTimes(1);
    });
});
