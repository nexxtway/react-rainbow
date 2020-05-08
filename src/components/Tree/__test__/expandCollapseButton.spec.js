import React from 'react';
import { mount } from 'enzyme';
import ExpandCollapseButton from './../expandCollapseButton';

describe('<ExpandCollapseButton/>', () => {
    it('should return the Spinner component when isLoading prop is true', () => {
        const component = mount(<ExpandCollapseButton isLoading />);
        expect(component.find('Spinner').exists()).toBe(true);
    });
    it('should return the ButtonIcon component when hasChildren prop is true', () => {
        const component = mount(<ExpandCollapseButton hasChildren />);
        expect(component.find('ButtonIcon').exists()).toBe(true);
    });
    it('should set the right icon when isExpanded prop is true', () => {
        const component = mount(<ExpandCollapseButton isExpanded hasChildren />);
        expect(
            component
                .find('ButtonIcon')
                .find('DownArrow')
                .exists(),
        ).toBe(true);
    });
    it('should set the right icon when isExpanded prop is false', () => {
        const component = mount(<ExpandCollapseButton isExpanded={false} hasChildren />);
        expect(
            component
                .find('ButtonIcon')
                .find('RightArrow')
                .exists(),
        ).toBe(true);
    });
    it('should fire onclick callback when ButtonIcon is clicked', () => {
        const onClickMock = jest.fn();
        const component = mount(
            <ExpandCollapseButton isExpanded hasChildren onClick={onClickMock} />,
        );
        component.find('ButtonIcon').simulate('click');
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
