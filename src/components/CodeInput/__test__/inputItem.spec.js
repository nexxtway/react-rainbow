import React from 'react';
import { mount } from 'enzyme';
import { DELETE_KEY } from '../../../libs/constants';
import InputItem from '../inputItem';
import { StyledInput } from '../styled';

describe('<InputItem />', () => {
    it('should call onChange event with the right value and index when input changes', () => {
        const onChangeFn = jest.fn();
        const component = mount(<InputItem index={0} onChange={onChangeFn} />);
        component
            .find(StyledInput)
            .props()
            .onChange({ target: { value: 2 } });
        expect(onChangeFn).toHaveBeenCalledWith(2, 0);
    });
    it('should call onChange event with empty value when DELETE_KEY is pressed, current input value is empty and current index is greater than 0', () => {
        const onChangeFn = jest.fn();
        const component = mount(<InputItem index={1} onChange={onChangeFn} />);
        component
            .find(StyledInput)
            .props()
            .onKeyDown({ keyCode: DELETE_KEY });
        expect(onChangeFn).toHaveBeenCalledWith('', 0);
    });
    it('should not call onChange when DELETE_KEY is pressed, current input value is empty and current index is 0', () => {
        const onChangeFn = jest.fn();
        const component = mount(<InputItem index={0} onChange={onChangeFn} />);
        component
            .find(StyledInput)
            .props()
            .onKeyDown({ keyCode: DELETE_KEY });
        expect(onChangeFn).not.toHaveBeenCalled();
    });
    it('should call onClick event with the right value input is clicked', () => {
        const onClickFn = jest.fn();
        const component = mount(<InputItem index={2} value="2" onClick={onClickFn} />);
        component
            .find(StyledInput)
            .props()
            .onClick({ target: { value: '2' } });
        expect(onClickFn).toHaveBeenCalledWith({ target: { value: '2' } });
    });
    it('should call onFocus event with the right value and index when input is focused', () => {
        const onFocusFn = jest.fn();
        const component = mount(<InputItem index={0} value="2" onFocus={onFocusFn} />);
        component
            .find(StyledInput)
            .props()
            .onFocus({ target: { value: '2' } });
        expect(onFocusFn).toHaveBeenCalledWith({ target: { value: '2' } }, 0);
    });
    it('should call onBlur event with the right value when input leaves focus', () => {
        const onBlurFn = jest.fn();
        const component = mount(<InputItem index={0} value="2" onBlur={onBlurFn} />);
        component
            .find(StyledInput)
            .props()
            .onBlur({ target: { value: '2' } });
        expect(onBlurFn).toHaveBeenCalledWith({ target: { value: '2' } });
    });
    it('should call onKeyDown event with the right value when key is pressed', () => {
        const onKeyDownFn = jest.fn();
        const component = mount(<InputItem index={0} value="2" onKeyDown={onKeyDownFn} />);
        component
            .find(StyledInput)
            .props()
            .onKeyDown({ keyCode: DELETE_KEY });
        expect(onKeyDownFn).toHaveBeenCalledWith({ keyCode: DELETE_KEY });
    });
    it('should call onPaste event with the right value when string is pasted inside input', () => {
        const onPasteFn = jest.fn();
        const component = mount(<InputItem index={0} value="2" onPaste={onPasteFn} />);
        component
            .find(StyledInput)
            .props()
            .onPaste({
                clipboardData: '1234',
            });
        expect(onPasteFn).toHaveBeenCalledWith({
            clipboardData: '1234',
        });
    });
});
