import React from 'react';
import { mount } from 'enzyme';
import CodeInput from '../';
import InputItems from '../inputItems';
import InputItem from '../inputItem';
import { StyledErrorMessage, StyledHelpText, StyledLabel } from '../styled';

import useFocusedIndexState from '../hooks/useFocusedIndexState';
import usePreviousIndex from '../hooks/usePreviousIndex';
import useValueState from '../hooks/useValueState';
import getNormalizedValue from '../helpers/getNormalizedValue';
import getNumbersFromClipboard from '../helpers/getNumbersFromClipboard';

jest.mock('../hooks/useFocusedIndexState', () => jest.fn(() => 0));
jest.mock('../hooks/usePreviousIndex', () => jest.fn(() => undefined));
jest.mock('../hooks/useValueState', () => jest.fn(() => ['', '', '', '']));
jest.mock('../helpers/getNormalizedValue', () => jest.fn(() => ''));
jest.mock('../helpers/getNumbersFromClipboard', () => jest.fn(() => ''));

describe('<CodeInput />', () => {
    it('should have value length as 6 when length is 6', () => {
        useValueState.mockImplementation(() => ['', '', '', '', '', '']);
        const component = mount(<CodeInput length={6} />);
        expect(component.find(InputItems).prop('value').length).toBe(6);
    });
    it('should have label rendered if label is sent as param', () => {
        const component = mount(<CodeInput label="label-test" />);
        expect(component.find(StyledLabel).exists()).toBe(true);
    });
    it('should not have label rendered when label is emtpy', () => {
        const component = mount(<CodeInput />);
        expect(component.find(StyledLabel).exists()).toBe(false);
    });
    it('should have bottomHelpText rendered if is sent as param', () => {
        const component = mount(<CodeInput bottomHelpText="help-text-test" />);
        expect(component.find(StyledHelpText).exists()).toBe(true);
    });
    it('should not have bottomHelpText rendered when bottomHelpText is empty', () => {
        const component = mount(<CodeInput />);
        expect(component.find(StyledHelpText).exists()).toBe(false);
    });
    it('should have error rendered if is sent as param', () => {
        const component = mount(<CodeInput error="error-test" />);
        expect(component.find(StyledErrorMessage).exists()).toBe(true);
    });
    it('should not have error rendered if is not sent as param', () => {
        const component = mount(<CodeInput />);
        expect(component.find(StyledErrorMessage).exists()).toBe(false);
    });
    it('should keep isActive as true on active input whenever any other input is clicked', () => {
        const component = mount(<CodeInput />);
        const input0 = component.find(InputItem).at(0);
        const input2 = component.find(InputItem).at(2);
        input2.simulate('click');
        expect(input0.prop('isActive')).toBe(true);
        expect(input2.prop('isActive')).toBe(false);
    });
    it('should set isActive as true over the second input when first input is filled', () => {
        const component = mount(<CodeInput />);
        useValueState.mockImplementation(() => ['1', '', '', '']);
        useFocusedIndexState.mockImplementation(() => 1);
        component.setProps({ value: '1' });
        expect(
            component
                .find(InputItem)
                .at(0)
                .prop('isActive'),
        ).toBe(false);
        expect(
            component
                .find(InputItem)
                .at(1)
                .prop('isActive'),
        ).toBe(true);
    });
    it('should keep isActive as true on the last input when all inputs are filled an last input changes', () => {
        const component = mount(<CodeInput />);
        useValueState.mockImplementation(() => ['1', '2', '3', '4']);
        useFocusedIndexState.mockImplementation(() => 3);
        component.setProps({ value: '1234' });
        expect(
            component
                .find(InputItem)
                .at(3)
                .prop('isActive'),
        ).toBe(true);
    });
    it('should call onChange with the number value when input value changes and is number', () => {
        getNormalizedValue.mockImplementation(() => '3');
        const onChangeFn = jest.fn();
        const component = mount(<CodeInput onChange={onChangeFn} />);
        const inputIndex = 0;
        component
            .find(InputItems)
            .props()
            .onChange('3', inputIndex);
        expect(onChangeFn).toHaveBeenCalledWith('3');
    });
    it('should not call onChange when input value changes and is not a number', () => {
        getNormalizedValue.mockImplementation(() => '');
        const onChangeFn = jest.fn();
        const component = mount(<CodeInput onChange={onChangeFn} />);
        const inputIndex = 0;
        component
            .find(InputItems)
            .props()
            .onChange('A', inputIndex);
        expect(onChangeFn).not.toHaveBeenCalled();
    });
    it('should call getNumbersFromClipboard with the copy and pasted value', () => {
        getNumbersFromClipboard.mockClear();
        const component = mount(<CodeInput />);
        component
            .find(InputItem)
            .at(0)
            .props()
            .onPaste({
                clipboardData: {
                    getData: () => '12345abcdfe',
                },
            });
        expect(getNumbersFromClipboard).toHaveBeenCalledWith('12345abcdfe');
    });
    it('should call onChange with numbers only when we copy and paste a mixed text and numbers string', () => {
        getNumbersFromClipboard.mockImplementation(() => '12345');
        const onChangeFn = jest.fn();
        const component = mount(<CodeInput onChange={onChangeFn} length={5} />);
        component
            .find(InputItem)
            .at(0)
            .props()
            .onPaste({
                clipboardData: {
                    getData: () => '12345abcdfe',
                },
            });
        expect(onChangeFn).toHaveBeenCalledWith('12345');
    });
    it('should call getNormalizedValue with the right values when value changes', () => {
        useValueState.mockImplementation(() => ['1', '2', '', '']);
        const component = mount(<CodeInput value="12" />);
        const inputIndex = 2;
        component
            .find(InputItems)
            .props()
            .onChange('3', inputIndex);
        expect(getNormalizedValue).toHaveBeenCalledWith('3', 2, ['1', '2', '', '']);
    });
    it('should call useValueState with the right value and length', () => {
        useValueState.mockReset();
        mount(<CodeInput value="1" length={4} />);
        expect(useValueState).toHaveBeenCalledWith('1', 4);
    });
    it('should call useFocusedIndexState with the right value and length', () => {
        useValueState.mockReset();
        mount(<CodeInput value="6" length={3} />);
        expect(useValueState).toHaveBeenCalledWith('6', 3);
    });
    it('should call usePreviousIndex with the right focusedIndex value', () => {
        usePreviousIndex.mockReset();
        useFocusedIndexState.mockImplementation(() => 2);
        mount(<CodeInput value="12" />);
        expect(usePreviousIndex).toHaveBeenCalledWith(2);
    });
});
