import React from 'react';
import { mount } from 'enzyme';
import CSVCell from '../csvCell';
import ButtonIcon from '../../../ButtonIcon';

describe('<CSVCell />', () => {
    it('should return the same value if value is sent as param', () => {
        const returnValue = mount(<CSVCell value="test-value" />);
        expect(returnValue.text()).toBe('test-value');
    });
    it('should have assign field content when no value is sent as param', () => {
        const component = mount(<CSVCell />);
        expect(component.text()).toBe('Not assigned yet');
    });
    it('should trigger click event using database param', () => {
        const onClickFn = jest.fn();
        const row = { databaseField: 'name' };
        const component = mount(<CSVCell onClick={onClickFn} row={row} />);
        component.find(ButtonIcon).simulate('click');
        expect(onClickFn).toHaveBeenCalledWith(row.databaseField);
    });
});
