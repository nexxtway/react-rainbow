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
});
