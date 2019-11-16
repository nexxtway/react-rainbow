import React from 'react';
import { mount } from 'enzyme';
import Lookup from '../';
import StyledTextError from '../../Input/styled/errorText';

describe('<Lookup />', () => {
    it('should set an id in the input element', () => {
        const component = mount(<Lookup />);
        expect(component.find('input').prop('id')).toMatch(/lookup-input/);
    });
    it('should set type "search" in the input element', () => {
        const component = mount(<Lookup />);
        expect(component.find('input').prop('type')).toBe('search');
    });
    it('should pass a generated id to the Error element and set the same id to the aria-describedby for the input when a error is passed', () => {
        const component = mount(<Lookup error="error message" />);
        expect(component.find(StyledTextError).prop('id')).toMatch(/error-message/);
        expect(component.find('input').prop('aria-describedby')).toMatch(/error-message/);
    });
    it('should pass the right props to the Label component', () => {
        const component = mount(<Lookup label="custom label" required />);
        expect(component.find('Label').props()).toEqual({
            label: 'custom label',
            required: true,
            readOnly: false,
            hideLabel: false,
            inputId: expect.any(String),
        });
    });
    it('should render the Options menu when there are options and the input is focused', () => {
        const component = mount(<Lookup label="custom label" options={[{}]} />);
        expect(component.find('Options').exists()).toBe(false);
        component.find('input').simulate('focus');
        expect(component.find('Options').exists()).toBe(true);
    });
    it('should render the Options menu when there are not options but the input has value typed and is focused', () => {
        const component = mount(<Lookup label="custom label" options={[]} />);
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
        component
            .find('Options')
            .find('li')
            .at(1)
            .simulate('mouseEnter');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        component
            .find('Options')
            .find('li')
            .at(1)
            .simulate('mousedown');
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
        component
            .find('Options')
            .find('li')
            .at(0)
            .simulate('mousedown');
        expect(component.find('input').prop('value')).toBe('');
    });
    it('should call onSearch with the right value when type in the input', () => {
        const onSearchMockFn = jest.fn();
        const component = mount(<Lookup label="custom label" onSearch={onSearchMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'london',
            },
        });
        expect(onSearchMockFn).toHaveBeenCalledWith('london');
    });
    it('should not render a SelectedValue component when value passed is other than object', () => {
        const values = ['', 'my value', 123, undefined, null, NaN, [], () => {}];
        values.forEach(value => {
            const component = mount(<Lookup label="custom label" value={value} />);
            expect(component.find('SelectedValue').exists()).toBe(false);
            expect(component.find('input[type="search"]').exists()).toBe(true);
        });
    });
    it('should render a SelectedValue component when value is passed', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const onChangeMockFn = jest.fn();
        const onSearchMockFn = jest.fn();
        const component = mount(
            <Lookup
                label="custom label"
                value={value}
                onChange={onChangeMockFn}
                onSearch={onSearchMockFn}
            />,
        );
        expect(component.find('SelectedValue').exists()).toBe(true);
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
                onSearch={onSearchMockFn}
            />,
        );
        component
            .find('SelectedValue')
            .find('ButtonIcon')
            .simulate('click');
        expect(onChangeMockFn).toHaveBeenCalledWith(null);
        expect(onSearchMockFn).toHaveBeenCalledWith('');
    });
    it('should reset the input value when click the close button', () => {
        const onSearchMockFn = jest.fn();
        const component = mount(<Lookup label="custom label" onSearch={onSearchMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'london',
            },
        });
        expect(component.find('input').prop('value')).toBe('london');
        component
            .find('RightElement')
            .find('ButtonIcon')
            .simulate('click');
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
    it('should pass a function to onClearValue prop in SelectedValue component', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(<Lookup label="custom label" value={value} />);
        expect(component.find('SelectedValue').prop('onClearValue')).toEqual(expect.any(Function));
    });
    it('should not set the onClearValue prop in SelectedValue component when pass disabled', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(<Lookup label="custom label" value={value} disabled />);
        expect(component.find('SelectedValue').prop('onClearValue')).toBeUndefined();
    });
    it('should not set the onClearValue prop in SelectedValue component when pass readOnly', () => {
        const value = { label: 'New York', description: 'awesome city' };
        const component = mount(<Lookup label="custom label" value={value} readOnly />);
        expect(component.find('SelectedValue').prop('onClearValue')).toBeUndefined();
    });
    it('should set the right options and reset the focusedItemIndex when the options changes', () => {
        const options = [
            { label: 'Paris', description: 'An awesome city' },
            { label: 'Madrid' },
            { label: 'New York' },
            { label: 'San Fransisco' },
        ];
        const component = mount(<Lookup label="custom label" options={options} />);
        component.find('input').simulate('focus');
        component
            .find('Options')
            .find('li')
            .at(2)
            .simulate('mouseEnter');
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
                options: [{ label: 'Paris', description: 'An awesome city' }, { label: 'Madrid' }],
            },
            {
                type: 'section',
                label: 'American Cities',
                options: [{ label: 'New York' }, { label: 'San Fransisco' }, { label: 'Miami' }],
            },
        ];
        const component = mount(<Lookup label="custom label" options={options} />);
        component.find('input').simulate('focus');
        component
            .find('Options')
            .find('li')
            .at(1)
            .simulate('mouseEnter');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(1);
        component.setProps({
            options: [
                {
                    type: 'section',
                    label: 'European Cities',
                    options: [{ label: 'Madrid' }],
                },
                {
                    type: 'section',
                    label: 'American Cities',
                    options: [{ label: 'Miami' }],
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
    it('should call event.stopPropagation when press esc key and the input has value typed', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<Lookup label="custom label" />);
        component.find('input').simulate('focus');
        component.find('input').simulate('change', {
            target: {
                value: 'test',
            },
        });
        component.find('input').simulate('keyDown', {
            keyCode: 27,
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not call event.stopPropagation when press esc key and the input has not value typed', () => {
        const stopPropagationMockFn = jest.fn();
        const component = mount(<Lookup label="custom label" />);
        component.find('input').simulate('focus');
        component.find('input').simulate('keyDown', {
            keyCode: 27,
            stopPropagation: stopPropagationMockFn,
        });
        expect(stopPropagationMockFn).not.toHaveBeenCalled();
    });
    it('should fire onBlur with null', () => {
        const onBlurMockFn = jest.fn();
        const component = mount(<Lookup label="custom label" onBlur={onBlurMockFn} />);
        component.find('input').simulate('focus');
        component.find('input').simulate('blur');
        expect(onBlurMockFn).toHaveBeenCalledWith(null);
    });

    it('should set the initial visual-focus to the option that is passed as preferredSelectedOption', () => {
        const options = [
            { label: 'Paris' },
            { label: 'New York' },
            { label: 'Los Angeles' },
            { label: 'Brussels' },
            { label: 'San Fransisco' },
        ];
        const component = mount(
            <Lookup label="custom label" options={options} preferredSelectedOption={3} />,
        );
        component.find('input').simulate('focus');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(3);
    });
    it('should fallback to 0 if the index passed as preferredSelectedOption does not exist', () => {
        const options = [{ label: 'Paris' }, { label: 'New York' }];
        const component = mount(
            <Lookup label="custom label" options={options} preferredSelectedOption={3} />,
        );
        component.find('input').simulate('focus');
        expect(component.find('Options').prop('focusedItemIndex')).toBe(0);
    });
});
