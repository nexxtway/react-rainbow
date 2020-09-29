/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import InternalUniversalPicker from '..';
import { useInternalUniversalPickerContext } from '../context';

const Option = ({ name }) => {
    const { onChange, multiple } = useInternalUniversalPickerContext();
    const type = multiple ? 'checkbox' : 'radio';
    return <input type={type} onChange={event => onChange(name, event.target.checked)} />;
};

describe('<InternalUniversalPicker />', () => {
    it('should call onChange with string when multiple is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <InternalUniversalPicker onChange={onChangeMock}>
                <Option name={name} />
            </InternalUniversalPicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith(name);
    });

    it('should call onChange with array when multiple is true and checked is true', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <InternalUniversalPicker onChange={onChangeMock} multiple>
                <Option name={name} />
            </InternalUniversalPicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith([name]);
    });

    it('should call onChange with empty array when multiple is true and checked is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <InternalUniversalPicker onChange={onChangeMock} multiple>
                <Option name={name} />
            </InternalUniversalPicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: false } });
        expect(onChangeMock).toBeCalledWith([]);
    });

    it('should call onChange with array when multiple is true and value is array', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <InternalUniversalPicker value={[]} onChange={onChangeMock} multiple>
                <Option name={name} />
            </InternalUniversalPicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: true } });
        expect(onChangeMock).toBeCalledWith([name]);
    });

    it('should call onChange with empty array when multiple is true and checked is false', () => {
        const onChangeMock = jest.fn();
        const name = 'option-1';
        const wrapper = mount(
            <InternalUniversalPicker value={[name]} onChange={onChangeMock} multiple>
                <Option name={name} />
            </InternalUniversalPicker>,
        );

        wrapper
            .find('input')
            .first()
            .simulate('change', { target: { checked: false } });
        expect(onChangeMock).toBeCalledWith([]);
    });
});
