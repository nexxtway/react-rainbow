import React from 'react';
import { mount } from 'enzyme';
import Lookup from '../';

describe('<Lookup />', () => {
    it('should set an id in the input element', () => {
        const component = mount(
            <Lookup />,
        );
        expect(component.find('input').prop('id')).toMatch(/lookup-input/);
    });
    it('should set type "search" in the input element', () => {
        const component = mount(
            <Lookup />,
        );
        expect(component.find('input').prop('type')).toBe('search');
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(
            <Lookup error="error message" />,
        );
        expect(component.find('.rainbow-lookup_input-error').prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(
            <Lookup label="custom label" required />,
        );
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
        });
    });
    it('should set the right class names in the container element when pass an error', () => {
        const component = mount(
            <Lookup label="custom label" error="some error" />,
        );
        expect(component.find('div.rainbow-lookup_container.rainbow-lookup_container--error').exists()).toBe(true);
    });
    it('should set the right class names in the input element when isLoading is passed', () => {
        const component = mount(
            <Lookup label="custom label" options={[{}]} isLoading />,
        );
        component.find('input').simulate('focus');
        expect(component.find('input.rainbow-lookup_input.rainbow-lookup_input--loading').exists()).toBe(true);
    });
    it('should render the Options menu when there are options and the input is focused', () => {
        const component = mount(
            <Lookup label="custom label" options={[{}]} />,
        );
        expect(component.find('Options').exists()).toBe(false);
        component.find('input').simulate('focus');
        expect(component.find('Options').exists()).toBe(true);
    });
    it('should render the Options menu when there are not options but the input has value typed and is focused', () => {
        const component = mount(
            <Lookup label="custom label" options={[]} />,
        );
        expect(component.find('Options').exists()).toBe(false);
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'abc',
            },
        });
        expect(component.find('input').prop('value')).toBe('abc');
        expect(component.find('Options').exists()).toBe(true);
    });
    it('should call onChange with the right data when select an option', () => {
        const options = [
            { label: 'San Francisco' },
            { label: 'New York', description: 'awesome city' },
        ];
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" options={options} onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('Options').find('li').at(1).simulate('mouseEnter');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        component.find('Options').find('li').at(1).simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith({
            label: 'New York',
            description: 'awesome city',
        });
    });
    it('should reset input value when select an option', () => {
        const options = [
            { label: 'San Francisco' },
            { label: 'New York', description: 'awesome city' },
        ];
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" options={options} onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'abc',
            },
        });
        expect(component.find('input').prop('value')).toBe('abc');
        component.find('Options').find('li').at(0).simulate('click');
        expect(component.find('input').prop('value')).toBe('');
    });
    it('should call onSearch with the right value when type in the input', () => {
        const onSearchMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" onSearch={onSearchMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'london',
            },
        });
        expect(onSearchMockFn).toHaveBeenCalledWith('london');
    });
    it('should render a Chip component when value is passed', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const onChangeMockFn = jest.fn();
        const onSearchMockFn = jest.fn();
        const component = mount(
            <Lookup
                label="custom label"
                value={value}
                onChange={onChangeMockFn}
                onSearch={onSearchMockFn} />,
        );
        expect(component.find('Chip').exists()).toBe(true);
    });
    it('should call onChange and onSearch with the right values when remove the value selected', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const onChangeMockFn = jest.fn();
        const onSearchMockFn = jest.fn();
        const component = mount(
            <Lookup
                label="custom label"
                value={value}
                onChange={onChangeMockFn}
                onSearch={onSearchMockFn} />,
        );
        component.find('Chip').find('ButtonIcon').simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(null);
        expect(onSearchMockFn).toHaveBeenCalledWith('');
    });
    it('should reset the input value when click the close button', () => {
        const onSearchMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" onSearch={onSearchMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'london',
            },
        });
        expect(component.find('input').prop('value')).toBe('london');
        component.find('RightElement').find('ButtonIcon').simulate('click');
        expect(component.find('input').prop('value')).toBe('');
        expect(onSearchMockFn.mock.calls[0][0]).toBe('london');
        expect(onSearchMockFn.mock.calls[1][0]).toBe('');
    });
    it('should call onChange with the right data and reset the input value when press enter key with the options menu open', () => {
        const options = [
            { label: 'San Francisco' },
            { label: 'New York', description: 'awesome city' },
        ];
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" options={options} onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'abc',
            },
        });
        expect(component.find('input').prop('value')).toBe('abc');
        component.find('input').simulate('keyDown', { keyCode: 13 });
        expect(onChangeMockFn).toHaveBeenCalledWith({
            label: 'San Francisco',
        });
        expect(component.find('input').prop('value')).toBe('');
    });
    it('should call onChange with the right data when press arrow down key and then enter key with the options menu open', () => {
        const options = [
            { label: 'San Francisco' },
            { label: 'New York', description: 'awesome city' },
        ];
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" options={options} onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('keyDown', { keyCode: 40 });
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        component.find('input').simulate('keyDown', { keyCode: 13 });
        expect(onChangeMockFn).toHaveBeenCalledWith({
            label: 'New York',
            description: 'awesome city',
        });
    });
    it('should call onChange with the right data when press down, up and enter key with the options menu open', () => {
        const options = [
            { label: 'San Francisco' },
            { label: 'New York', description: 'awesome city' },
        ];
        const onChangeMockFn = jest.fn();
        const component = mount(
            <Lookup label="custom label" options={options} onChange={onChangeMockFn} />,
        );
        component.find('input').simulate('focus');
        component.find('input').simulate('keyDown', { keyCode: 40 });
        component.find('input').simulate('keyDown', { keyCode: 38 });
        component.find('input').simulate('keyDown', { keyCode: 13 });
        expect(onChangeMockFn).toHaveBeenCalledWith({
            label: 'San Francisco',
        });
    });
    it('should pass a function to onDelete prop in Chip component', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(
            <Lookup label="custom label" value={value} />,
        );
        expect(component.find('Chip').prop('onDelete')).toEqual(expect.any(Function));
    });
    it('should not set the onDelete prop in Chip component when pass disabled', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(
            <Lookup label="custom label" value={value} disabled />,
        );
        expect(component.find('Chip').prop('onDelete')).toBeUndefined();
    });
    it('should not set the onDelete prop in Chip component when pass readOnly', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(
            <Lookup label="custom label" value={value} readOnly />,
        );
        expect(component.find('Chip').prop('onDelete')).toBeUndefined();
    });
    it('should set the right options and reset the focusedItemIndex when the options changes', () => {
        const options = [
            { label: 'Paris', description: 'An awesome city' },
            { label: 'Madrid' },
            { label: 'New York' },
            { label: 'San Fransisco' },
        ];
        const component = mount(
            <Lookup label="custom label" options={options} />,
        );
        component.find('input').simulate('focus');
        component.find('Options').find('li').at(2).simulate('mouseEnter');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(2);
        component.setProps({
            options: [
                { label: 'Paris', description: 'An awesome city' },
                { label: 'Madrid' },
                { label: 'New York' },
            ],
        });
        component.update();
        expect(component.find('Options').prop('focusedItemIndex')).toBe(0);
        expect(component.find('Options').prop('items')).toEqual([
            { label: 'Paris', description: 'An awesome city' },
            { label: 'Madrid' },
            { label: 'New York' },
        ]);
    });
    it('should set the right options and reset the focusedItemIndex when the options changes and are type "section"', () => {
        const options = [
            {
                type: 'section',
                label: 'European Cities',
                options: [
                    { label: 'Paris', description: 'An awesome city' },
                    { label: 'Madrid' },
                ],
            },
            {
                type: 'section',
                label: 'American Cities',
                options: [
                    { label: 'New York' },
                    { label: 'San Fransisco' },
                    { label: 'Miami' },
                ],
            },
        ];
        const component = mount(
            <Lookup label="custom label" options={options} />,
        );
        component.find('input').simulate('focus');
        component.find('Options').find('li').at(1).simulate('mouseEnter');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        component.setProps({
            options: [
                {
                    type: 'section',
                    label: 'European Cities',
                    options: [
                        { label: 'Madrid' },
                    ],
                },
                {
                    type: 'section',
                    label: 'American Cities',
                    options: [
                        { label: 'Miami' },
                    ],
                },
            ],
        });
        component.update();
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        expect(component.find('Options').prop('items')).toEqual([
            { label: 'European Cities', type: 'header' },
            { label: 'Madrid' },
            { label: 'American Cities', type: 'header' },
            { label: 'Miami' },
        ]);
    });
});
