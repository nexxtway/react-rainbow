import React from 'react';
import { mount } from 'enzyme';
import MultiSelect from '..';
import Option from '../../Option';
import HelpText from '../../Input/styled/helpText';
import ErrorText from '../../Input/styled/errorText';
import Label from '../../Input/label/labelText';
import { StyledChip, StyledPlaceholder, StyledInput, StyledText } from '../styled';

describe('<MultiSelect />', () => {
    it('should render Label when label prop is passed', () => {
        const component = mount(<MultiSelect label="Label" />);
        expect(component.find(Label).exists()).toBe(true);
    });

    it('should render a HelpText when bottomHelpText prop is passed', () => {
        const component = mount(<MultiSelect bottomHelpText="Help text" />);
        expect(component.find(HelpText).exists()).toBe(true);
    });

    it('should render a ErrorText when error prop is passed', () => {
        const component = mount(<MultiSelect error="Error text" />);
        expect(component.find(ErrorText).exists()).toBe(true);
    });

    it('should render the placeholder when there is no selected items', () => {
        const component = mount(<MultiSelect placeholder="Placeholder text" />);
        expect(component.find(StyledPlaceholder).exists()).toBe(true);
    });

    it('should render the default variant', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const component = mount(<MultiSelect value={value} />);
        expect(component.find(StyledText).exists()).toBe(true);
    });

    it('should render the correct amount of chips', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const component = mount(
            <MultiSelect value={value} variant="chip">
                <Option name="first" label="First" />
                <Option name="second" label="Second" />
            </MultiSelect>,
        );
        expect(component.find(StyledChip).length).toBe(2);
    });

    it('should fire change event when an item is removed', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
        ];
        const mockOnChange = jest.fn();
        const component = mount(
            <MultiSelect value={value} variant="chip" onChange={mockOnChange}>
                <Option name="first" label="First" />
                <Option name="second" label="Second" />
            </MultiSelect>,
        );
        const button = component.find(StyledChip).find('button');
        button.simulate('click');
        expect(mockOnChange).toHaveBeenCalledWith([]);
    });

    it('should fire focus event', () => {
        const mockOnFocus = jest.fn();
        const component = mount(<MultiSelect onFocus={mockOnFocus} />);
        component.find(StyledInput).simulate('focus');
        expect(mockOnFocus).toHaveBeenCalledTimes(1);
    });

    it('should fire blur event', () => {
        const mockOnBlur = jest.fn();
        const component = mount(<MultiSelect onBlur={mockOnBlur} />);
        component.find(StyledInput).simulate('blur');
        expect(mockOnBlur).toHaveBeenCalledTimes(1);
    });

    it('should not render the buttons when readOnly', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const component = mount(
            <MultiSelect value={value} variant="chip" readOnly>
                <Option name="first" label="First" />
                <Option name="second" label="Second" />
            </MultiSelect>,
        );
        expect(component.find('button').exists()).toBe(false);
    });

    it('should not render the buttons when disabled', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const component = mount(
            <MultiSelect value={value} variant="chip" disabled>
                <Option name="first" label="First" />
                <Option name="second" label="Second" />
            </MultiSelect>,
        );
        expect(component.find('button').exists()).toBe(false);
    });
});
