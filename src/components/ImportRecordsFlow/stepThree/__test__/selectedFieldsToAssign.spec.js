import React from 'react';
import { mount } from 'enzyme';
import SelectedFieldsToAssign from '../selectedFieldsToAssign';

const values = ['test-1', 'test-2'];

describe('<SelectedFieldsToAssign />', () => {
    it('should render the right amount of chip elements', () => {
        const component = mount(<SelectedFieldsToAssign values={values} />);
        expect(component.find('Chip').length).toBe(2);
    });
    it('should trigger delete callback when Chip delete button is clicked', () => {
        const onDeleteFn = jest.fn();
        const component = mount(<SelectedFieldsToAssign onDelete={onDeleteFn} values={values} />);
        component
            .find('button')
            .at(0)
            .simulate('click');
        expect(onDeleteFn).toHaveBeenCalledWith('test-1');
    });
    it('should have right label', () => {
        const component = mount(<SelectedFieldsToAssign values={values} />);
        const label = component
            .find('Chip')
            .at(1)
            .prop('label');
        expect(label).toBe('test-2');
    });
});
