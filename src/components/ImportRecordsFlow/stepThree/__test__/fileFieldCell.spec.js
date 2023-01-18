import React from 'react';
import { mount } from 'enzyme';
import CSVCell from '../csvCell';
import StyledAssignButton from '../styled/assignButton';

describe('<CSVCell />', () => {
    it('should return the same value if value is sent as param', () => {
        const returnValue = CSVCell({ value: 'test-value' });
        expect(returnValue).toBe('test-value');
    });
    it('should have assign field content when no value is sent as param', () => {
        const component = mount(<CSVCell />);
        expect(component.text()).toBe('Not assigned yet');
    });
    it('should have proper labels according to value status', () => {
        expect.assertions(2);
        const component = mount(<CSVCell row={{ databaseField: 'name' }} />);
        expect(component.text()).toBe('Assign');
        component.setProps({ value: 'test' });
        expect(component.text()).toBe('Change');
    });
    it('should trigger click event using database param', () => {
        const onClickFn = jest.fn();
        const row = { databaseField: 'name' };
        const component = mount(<CSVCell onClick={onClickFn} row={row} />);
        component.find(StyledAssignButton).simulate('click');
        expect(onClickFn).toHaveBeenCalledWith(row.databaseField);
    });
});
