import React from 'react';
import { mount } from 'enzyme';
import VisualPicker from '../index';
import VisualPickerOption from '../../VisualPickerOption';

describe('<VisualPicker/>', () => {
    it('should call onChanged with string value', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <VisualPicker onChange={onChangeFn}>
                <VisualPickerOption name="option1" />
                <VisualPickerOption name="option2" />
                <VisualPickerOption name="option3" />
            </VisualPicker>,
        );
        component
            .find('VisualPickerOption[name="option2"]')
            .find('input')
            .simulate('change');
        expect(onChangeFn).toHaveBeenCalledWith('option2');
    });
    it('should call onChanged with array of names', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <VisualPicker onChange={onChangeFn} multiple value={['option1']}>
                <VisualPickerOption name="option1" />
                <VisualPickerOption name="option2" />
                <VisualPickerOption name="option3" />
            </VisualPicker>,
        );
        component
            .find('VisualPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: true } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1', 'option3']);
    });
    it('should call onChanged with the new option selected when have it has one selected initially', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <VisualPicker onChange={onChangeFn} value={'option1'}>
                <VisualPickerOption name="option1" />
                <VisualPickerOption name="option2" />
                <VisualPickerOption name="option3" />
            </VisualPicker>,
        );
        component
            .find('VisualPickerOption[name="option3"]')
            .find('input[type="radio"]')
            .simulate('change');
        expect(onChangeFn).toHaveBeenCalledWith('option3');
    });
    it('should call onChanged with the right options when is multiple and the initial value is not an array', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <VisualPicker onChange={onChangeFn} multiple value={undefined}>
                <VisualPickerOption name="option1" />
                <VisualPickerOption name="option2" />
                <VisualPickerOption name="option3" />
            </VisualPicker>,
        );
        component
            .find('VisualPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: true } });
        expect(onChangeFn).toHaveBeenCalledWith(['option3']);
    });
    it('should call onChanged with the right options when is multiple, have values selected initially and deselect one', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <VisualPicker onChange={onChangeFn} multiple value={['option1', 'option3']}>
                <VisualPickerOption name="option1" />
                <VisualPickerOption name="option2" />
                <VisualPickerOption name="option3" />
            </VisualPicker>,
        );
        component
            .find('VisualPickerOption[name="option3"]')
            .find('input[type="checkbox"]')
            .simulate('change', { target: { checked: false } });
        expect(onChangeFn).toHaveBeenCalledWith(['option1']);
    });
});
