import React from 'react';
import { mount } from 'enzyme';
import SelectedValue from '../selectedValue';

const value = { label: 'this is a test' };
const valueWithIcon = { label: 'this is a test', icon: 'ok' };

describe('<SelectedValue />', () => {
    it('should render an input container', () => {
        const component = mount(<SelectedValue value={valueWithIcon} />);
        expect(component.find('input').prop('type')).toBe('text');
        expect(component.find('input').prop('value')).toBe('this is a test');
    });
    it('should set the id passed as the id prop in the input element', () => {
        const component = mount(<SelectedValue id="label-123" />);
        expect(component.find('input').prop('id')).toBe('label-123');
    });
    it('should not render an icon container', () => {
        const component = mount(<SelectedValue value={value} />);
        expect(component.find('span.rainbow-lookup_selected-value-icon').exists()).toBe(false);
    });
    it('should render an icon container', () => {
        const component = mount(<SelectedValue value={valueWithIcon} />);
        expect(component.find('span.rainbow-lookup_selected-value-icon').exists()).toBe(true);
    });
    it('should render a close button', () => {
        const component = mount(<SelectedValue />);
        expect(component.find('ButtonIcon').exists()).toBe(true);
    });
    it('should fire an event when click the button', () => {
        const onClearMockFn = jest.fn();
        const component = mount(<SelectedValue onClearValue={onClearMockFn} />);
        component.find('ButtonIcon').simulate('click');
        expect(onClearMockFn).toHaveBeenCalledTimes(1);
    });
});
