import React from 'react';
import { mount } from 'enzyme';
import copyFn from 'clipboard-copy';
import SelectedValue from '../selectedValue';
import StyledSelectedValueIcon from '../styled/selectedValueIcon';

jest.mock('clipboard-copy');

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
        expect(component.find(StyledSelectedValueIcon).exists()).toBe(false);
    });
    it('should render an icon container', () => {
        const component = mount(<SelectedValue value={valueWithIcon} />);
        expect(component.find(StyledSelectedValueIcon).exists()).toBe(true);
    });
    it('should render a close button', () => {
        const component = mount(<SelectedValue />);
        expect(component.find('ButtonIcon').exists()).toBe(true);
    });
    it('should fire an event when the close button is clicked', () => {
        const onClearMockFn = jest.fn();
        const component = mount(<SelectedValue onClearValue={onClearMockFn} />);
        component.find('ButtonIcon').simulate('click');
        expect(onClearMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not render the close button when readOnly is passed', () => {
        const component = mount(<SelectedValue readOnly />);
        expect(component.find('ButtonIcon').exists()).toBe(false);
    });
    it('should not render the close button when disabled is passed', () => {
        const component = mount(<SelectedValue disabled />);
        expect(component.find('ButtonIcon').exists()).toBe(false);
    });
    it('should copy value label to clipboard when input gets focus', () => {
        copyFn.mockReset();
        const component = mount(<SelectedValue value={value} />);
        component.find('input').simulate('focus');
        expect(copyFn).toHaveBeenCalledWith(value.label);
    });
});
