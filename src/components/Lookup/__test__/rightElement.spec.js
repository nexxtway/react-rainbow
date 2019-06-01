import React from 'react';
import { mount } from 'enzyme';
import RightElement from '../rightElement';
import SearchIcon from '../icons/searchIcon';
import CloseIcon from '../icons/closeIcon';

describe('<RightElement />', () => {
    it('should render an icon container', () => {
        const component = mount(<RightElement />);
        expect(component.find('span.rainbow-lookup_input-icon').exists()).toBe(true);
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
    it('should render an icon container with custom icon', () => {
        const component = mount(<RightElement searchIcon={<CloseIcon />} />);
        expect(component.find('span.rainbow-lookup_input-icon').exists()).toBe(true);
    });
    it('should render an icon container with custom closeIcon', () => {
        const component = mount(<RightElement closeIcon={<SearchIcon />} />);
        expect(component.find('span.rainbow-lookup_input-icon').exists()).toBe(true);
    });
});
