import React from 'react';
import { mount } from 'enzyme';
import ModifyCell from '../modifyCell';
import StyledAssignButton from '../styled/assignButton';

describe('<ModifyCell />', () => {
    it('should have proper labels according to value status', () => {
        expect.assertions(2);
        const component = mount(<ModifyCell row={{ databaseField: 'name' }} />);
        expect(component.text()).toBe('Assign');
        component.setProps({ value: 'test' });
        expect(component.text()).toBe('Change');
    });
    it('should trigger click event using database param', () => {
        const onClickFn = jest.fn();
        const row = { databaseField: 'name' };
        const component = mount(<ModifyCell onClick={onClickFn} row={row} />);
        component.find(StyledAssignButton).simulate('click');
        expect(onClickFn).toHaveBeenCalledWith(row.databaseField);
    });
});
